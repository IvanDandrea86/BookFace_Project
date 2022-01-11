
import { ObjectId } from "mongodb";
import { UserModel } from "../entities/user.entity";
import {FriendRequestModel} from "../entities/friendRequest.entity";


export const seedMongoWithFriendsRequest=async(howmuch:number)=>{
    
   
    for(let i=0; i<howmuch;i+=1){
        const _id = new ObjectId();
        const randomSender= await UserModel.aggregate([{ $sample: { size: 1 } }])
        const randomReciver= await UserModel.aggregate([{ $sample: { size: 1 } }])
        
        let friendrequest = new FriendRequestModel({
            _id,
            userSender: randomSender[0]._id,
            userReciver: randomReciver[0]._id,
            status: 'pending',
          });
          try{
             await friendrequest.save();
            }
            catch(err){
                console.log(err);
            }      
             
    }
    console.log(`🤝 New ${howmuch} Friend Request sended 🤝 `)
   
}