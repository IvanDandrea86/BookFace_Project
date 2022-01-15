import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Service } from "typedi";
import { Post, PostModel } from "../../entities/post.entity";
import { ObjectId } from "mongodb";
import { LikeState } from "../../types/types";
import { CommentModel } from "../../entities/comment.entity";
import { UserModel } from "../../entities/user.entity";

@Service() // Dependencies injection
@Resolver(() => Post)
export default class PostResolver {
  @Query(() => Post, { name: "findPostById" })
  async findPostById(@Arg("post_id") post_id: string) {
    return await PostModel.findOne({ _id: post_id }).sort({createdAt:"desc"});
  }
  @Query(() => [Post], { name: "findPostByUser" })
  async findPostByUser(@Arg("user_id") user_id: string): Promise<Post[]> {
    return PostModel.find({ user_id: user_id }).sort({createdAt:"desc"});
  }
  @Query(() => [Post], { name: "findAllPost" })
  async findAllPost(): Promise<Post[]> {
    return await PostModel.find({}).sort({createdAt:"desc"});
  }

  @Mutation(() => Post, { name: "addPost" })
  async addPost(
    @Arg("content") content: string,
    @Arg("userId") user_id: string
  ) {
    const _id = new ObjectId();
    const likes = new LikeState();
    const comments = new Array();
    const post = new PostModel({
      _id,
      post_id: _id,
      user_id: user_id,
      content: content,
      likes: likes,
      comments: comments,
    });

    await UserModel.findOneAndUpdate({_id:user_id},{$push:{postList:_id}})
    return await post.save();
  }

  @Mutation(() => Post, { name: "modifyPost" })
  async modifyPost(
    @Arg("post_id") post_id: string,
    @Arg("content") content: string
  ): Promise<Post> {
    try {
      await PostModel.findOneAndUpdate(
        { _id: post_id },
        { content: content }
      ).exec();
    } catch (err) {
      console.error(err);
    }
    const post = await PostModel.findOne({ _id: post_id }).exec();
    return post!.toObject();
  }
  @Mutation(() => Boolean, { name: "deletePost" })
  async deletePost(@Arg("post_id") post_id: string): Promise<Boolean> {
    try {
      const post=await PostModel.findOneAndDelete({ _id: post_id }).exec();
      await CommentModel.deleteMany({post_id:post_id}).exec();
      await UserModel.findOneAndUpdate({_id:post?.user_id},{$pull:{postList:post_id}})
    } catch (err) {
      console.error(err);
      return false;
    }
    return true;
  }

  @Mutation(() => Post, { name: "likePost" })
  async likePost(
    @Arg("post_id") post_id: string,
    @Arg("user_id") user_id: string
  ) {
    await PostModel.findOneAndUpdate(
      { _id: post_id },
      { $inc: { "likes.count": 1 } }
    ).exec();
    await PostModel.findOneAndUpdate(
      { _id: post_id },
      { $push: { "likes.likelist": user_id } }
    );
    return PostModel.findOne({ _id: post_id });
  }
  @Mutation(() => Post, { name: "unlikePost" })
  async unlikePost(
    @Arg("post_id") post_id: string,
    @Arg("user_id") user_id: string
  ) {
    {
      const post = await PostModel.findOneAndUpdate(
        { _id: post_id },
        { $inc: { "likes.count": -1 } }
      ).exec();
      if (post!.likes.count < 0) {
        await PostModel.findOneAndUpdate(
          { _id: post_id },
          { $set: { "likes.count": 0 } }
        ).exec();
      }
      await PostModel.findOneAndUpdate(
        { _id: post_id },
        { $pull: { "likes.likelist": user_id } }
      );
      return PostModel.findOne({ _id: post_id });
    }
  }
}
