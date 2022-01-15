import { ObjectId } from "mongodb";
import { LikeState } from "../../types/types";
import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Service } from "typedi";
import { Comment, CommentModel } from "../../entities/comment.entity";
import { PostModel } from "../../entities/post.entity";

@Service() // Dependencies injection
@Resolver(() => Comment)
export default class CommentResolver {

  @Query(() => Comment, { name: "findCommentById" })
  async findCommentById(@Arg("comment_id") comment_id: string) {
    return await CommentModel.findOne({ _id: comment_id });
  }
  
  @Query(() => [Comment], { name: "findCommentByUser" })
  async findCommentByUser(@Arg("user_id") user_id: string) {
    return CommentModel.find({ user_id: user_id });
  }
  @Query(() => [Comment], { name: "findCommentByPost" })
  async findCommentByPost(@Arg("post_id") post_id: string) {
    return CommentModel.find({ post_id: post_id });
  }


  @Query(() => [Comment], { name: "findAllComment" })
  async findAllComment() {
    return CommentModel.find({});
  }

  @Mutation(() => Comment, { name: "addComment" })
  async addComment(
    @Arg("content") content: string,
    @Arg("userId") user_id: string,
    @Arg("postId") post_id: string
  ) {
    const _id = new ObjectId();
    const likes = new LikeState();
    const comments = new Array();
    const comment = new CommentModel({
      _id,
      comment_id: _id,
      post_id: post_id,
      user_id: user_id,
      content: content,
      likes: likes,
      comments: comments,
    });
    await PostModel.findOneAndUpdate(
      { _id: post_id },
      { $push: { comments: comment } }
    );
    return await comment.save();
  }

  @Mutation(() => Comment, { name: "modifyComment" })
  async modifyComment(
    @Arg("commet_id") comment_id: string,
    @Arg("content") content: string
  ): Promise<Comment> {
    try {
      await CommentModel.findOneAndUpdate(
        { _id: comment_id },
        { content: content }
      ).exec();
    } catch (err) {
      console.error(err);
    }
    const comment = await CommentModel.findOne({ _id: comment_id }).exec();
    return comment!.toObject();
  }
  @Mutation(() => Boolean, { name: "deleteComment" })
  async deleteComment(
    @Arg("comment_id") comment_id: string,
    @Arg("post_id") post_id: string
  ): Promise<Boolean> {
    await PostModel.findOneAndUpdate(
      { _id: post_id },
      { $pull: { comments: comment_id } }
    ).exec();
    await CommentModel.findOneAndDelete({ _id: comment_id }).exec();
    return true;
  }
  @Mutation(() => Comment, { name: "unlikes" })
  async unlikes(
    @Arg("comment_id") comment_id: string,
    @Arg("user_id") user_id: string
  ) {
    const userlike = await CommentModel.findOne({ comment_id: comment_id });
    if (userlike!.likes.likelist.includes(user_id)) {
      {
        const comment = await CommentModel.findOneAndUpdate(
          { _id: comment_id },
          { $inc: { "likes.count": -1 } }
        ).exec();
        if (comment!.likes.count < 0) {
          await CommentModel.findOneAndUpdate(
            { _id: comment_id },
            { $set: { "likes.count": 0 } }
          ).exec();
        }
        await CommentModel.findOneAndUpdate(
          { _id: comment_id },
          { $pull: { "likes.likelist": user_id } }
        );
        return CommentModel.findOne({ _id: comment_id });
      }
    } else return userlike;
  }

  @Mutation(() => Comment, { name: "likes" })
  async likes(
    @Arg("comment_id") comment_id: string,
    @Arg("user_id") user_id: string
  ) {
    const userlike = await CommentModel.findOne({ comment_id: comment_id });

    if (userlike!.likes.likelist.includes(user_id)) {
      return await CommentModel.findOne({ _id: comment_id });
    }
    await CommentModel.findOneAndUpdate(
      { _id: comment_id },
      { $inc: { "likes.count": 1 } }
    ).exec();
    await CommentModel.findOneAndUpdate(
      { _id: comment_id },
      { $push: { "likes.likelist": user_id } }
    );
    return await CommentModel.findOne({ _id: comment_id });
  }
}
