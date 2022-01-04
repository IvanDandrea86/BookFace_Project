import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Service } from "typedi";
import {Post, PostModel}  from "../../entities/post.entity";
import { ObjectId } from "mongodb";


@Service() // Dependencies injection
@Resolver(() => Post)
export default class PostResolver {
    @Query(() => [Post], { name: 'findPostById' })
    async findById(
        @Arg('post_id') post_id: string
    ) {
      return await PostModel.find({_id:post_id});
    }
    
    @Mutation(() => Post, { name: 'createPost' })
    async create(
      @Arg('content') content: string,
      @Arg('userId') user_id: string  
    ) {

      let _id=new ObjectId()
      let post_id=_id
      return await PostModel.create({
        _id,
        post_id,
        content,
        user_id,
      });

}

}