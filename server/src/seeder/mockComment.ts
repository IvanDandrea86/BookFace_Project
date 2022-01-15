import faker from "faker";
import { PostModel } from "../entities/post.entity";
import { ObjectId } from "mongodb";
import { UserModel } from "../entities/user.entity";
import {CommentModel} from "../entities/comment.entity"


export const seedMongoWithComments=async(howmuch:number)=>{
    
   
    for(let i=0; i<howmuch;i+=1){
        const _id = new ObjectId();
        const content = faker.lorem.sentences(Math.floor(Math.random() * 10)+1)
        const randomPost = await PostModel.aggregate([{ $sample: { size: 1 } }])
        const randomUser = await UserModel.aggregate([{ $sample: { size: 1 } }]) 
        let post = new CommentModel({
            _id,
            user_id:randomUser[0]._id,
            post_id: randomPost[0]._id,
            comment_id:_id,
            content:content
          });
    
          try{
            await PostModel.findOneAndUpdate({_id:randomPost[0]._id},{$push:{comments:_id}})
            await post.save();
            }
            catch(err){
                console.log(err);
            }       
    }
    console.log(`🌱database seeded whit ${howmuch} new comments🌱 `)
   
}