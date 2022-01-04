import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Service } from "typedi";
import {Post, PostModel}  from "../entities/post.entity";
import { ObjectId } from "mongodb";


@Service() // Dependencies injection
@Resolver(() => Post)
export default class PostResolver {
    @Query(() => [Post], { name: 'findPostById' })
    async findPostById(
        @Arg('post_id') post_id: string
    ) {
      return await PostModel.find({_id:post_id});
    }
    @Query(()=>Post , { name: 'findPostByUser'})
    async findPostByUser(
      //Arg
    ){
      //Logic
    }
    @Query(()=>Post , { name: 'findAllPost'})
    async findAllPost(
      //Arg
    ){
      //Logic
    }
    
    @Mutation(() => Post, { name: 'addPost' })
    async addPost(
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

@Mutation(()=> Post, { name: 'modifyPost'})
async modifyPost(
  //Args
){
  //Logic
}
@Mutation(()=> Post, { name: 'deletePost'})
async deletePost(
  //Args
){
  //Logic
}
@Mutation(()=> Post, { name: 'likePost'})
async likePost(
  //Args
){
  //Logic
}
@Mutation(()=> Post, { name: 'unlikePost'})
async unlikePost(
  //Args
){
  //Logic
}

}