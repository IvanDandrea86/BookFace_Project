import faker from "faker";
import { UserModel } from "../entities/user.entity";
import {MessageModel} from "../entities/message.entity";
import { ObjectId } from "mongodb";



export const seedMongoWithMessages=async(howmuch:number)=>{
    
   
    for(let i=0; i<howmuch;i+=1){
        const _id = new ObjectId();
        const randomSender= await UserModel.aggregate([{ $sample: { size: 1 } }])
        const randomReciver= await UserModel.aggregate([{ $sample: { size: 1 } }])
        
        const content =  faker.lorem.paragraph(10)
        let message = new MessageModel({
            _id,
            sender_id: randomSender[0]._id,
            reciver_id: randomReciver[0]._id,
            content: content,
           
          });
          try{
             await message.save();
             await UserModel.findByIdAndUpdate({_id:randomSender[0]._id},{$push:{messagesSent:message._id}})
             await UserModel.findByIdAndUpdate({_id:randomReciver[0]._id},{$push:{messagesRecived:message._id}})
            }
            catch(err){
                console.log(err);
            }       
    }
    console.log(`🌱database seeded whit ${howmuch} new messages🌱 `)
   
}
