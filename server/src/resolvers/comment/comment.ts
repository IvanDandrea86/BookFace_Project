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
    @Query(()=>[Comment], { name:'findCommentByUser'})
    async findCommentByUser(
      //Arg
    ){
      //Logic
    }   
    
    @Query(()=>[Comment], { name:'findAllComment'})
    async findAllComment(
      //Arg
    ){
      //Logic
    }   
    

    @Mutation(() => Comment, { name: 'addComment' })
    async addComment(
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

    @Mutation (()=> Comment , {name:'modifyComment'})
    async modifyComment(
      //Args
    ){
      //Logic
    }
    @Mutation (()=> Comment , {name:'deleteComment'})
    async deleteComment(
      //Args
    ){
      //Logic
    }
    @Mutation (()=> Comment , {name:'likeComment'})
    async likeComment(
      //Args
    ){
      //Logic
    }
    @Mutation (()=> Comment , {name:'unlikeComment'})
    async unlikeComment(
      //Args
    ){
      //Logic
    }


}