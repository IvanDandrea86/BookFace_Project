import { ObjectId } from "mongodb";
import { Resolver, Arg, Query, Mutation} from "type-graphql";
import { Service } from "typedi";
import {Comment, CommentModel}  from "../../entities/comment.entity";


@Service() // Dependencies injection
@Resolver(() => Comment)
export default class CommentResolver {
    @Query(() => [Comment], { name: 'findCommentById' })
    async findById(
        @Arg('comment_id') comment_id: string
    ) {
      return await CommentModel.find({_id:comment_id});
    }
    
    @Mutation(() => Comment, { name: 'createComment' })
    async create(
      @Arg('content') content: string,
      @Arg('userId') user_id: string,
      @Arg('postId') post_id: string,
      
    ) {

      let _id=new ObjectId()
      let comment_id=_id;
      return await CommentModel.create({
       _id,
       comment_id,
        content,
        user_id,
        post_id
      });

}
}