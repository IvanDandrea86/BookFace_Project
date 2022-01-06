import { ObjectId } from "mongodb";
import { LikeState } from "../../types/types";
import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Service } from "typedi";
import { Comment, CommentModel } from "../../entities/comment.entity";

@Service() // Dependencies injection
@Resolver(() => Comment)
export default class CommentResolver {
  @Query(() => [Comment], { name: "findCommentById" })
  async findCommentById(@Arg("comment_id") comment_id: string) {
    return await CommentModel.findOne({ _id: comment_id });
  }
  @Query(() => [Comment], { name: "findCommentByUser" })
  async findCommentByUser(@Arg("user_id") user_id: string) {
    return CommentModel.find({ user_id: user_id });
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
    const likeComment = new LikeState();
    const comments = new Array();
    const comment = new CommentModel({
      _id,
      comment_id: _id,
      post_id: post_id,
      user_id: user_id,
      content: content,
      likeComment: likeComment,
      comments: comments,
    });

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
  async deleteComment(@Arg("Comment_id") Comment_id: string): Promise<Boolean> {
    try {
      await CommentModel.findOneAndDelete({ _id: Comment_id }).exec();
    } catch (err) {
      console.error(err);
      return false;
    }
    return true;
  }
  @Mutation(() => Comment, { name: "likeComment" })
  async likeComment(
    @Arg("post_it") comment_id: string,
    @Arg("user_id") user_id: string
  ) {
    {
      const comment = await CommentModel.findOneAndUpdate(
        { _id: comment_id },
        { $inc: { "likeComment.count": -1 } }
      ).exec();
      if (comment!.likeComment.count < 0) {
        await CommentModel.findOneAndUpdate(
          { _id: comment_id },
          { $set: { "likeComment.count": 0 } }
        ).exec();
      }
      await CommentModel.findOneAndUpdate(
        { _id: comment_id },
        { $pull: { "likeComment.likelist": user_id } }
      );
      return CommentModel.findOne({ _id: comment_id });
    }
  }
}
