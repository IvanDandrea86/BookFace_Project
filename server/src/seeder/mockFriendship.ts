
import { UserModel } from "../entities/user.entity";

export const makeSomeFriend=async(howmuch:number)=>{
    
   
    for(let i=0; i<howmuch;i+=1){
      
        const randomUser= await UserModel.aggregate([{ $sample: { size: 1 } }])
        const randomReciver= await UserModel.aggregate([{ $sample: { size: 1 } }])
        if(!randomUser[0].friendList.includes(randomReciver[0]._id) &&
            !randomReciver[0].friendList.includes(randomUser[0]._id) )
          try{
             await UserModel.findByIdAndUpdate({_id:randomUser[0]._id},{$push:{friendList:randomReciver[0]}})
             await UserModel.findByIdAndUpdate({_id:randomReciver[0]._id},{$push:{friendList:randomUser[0]._id}})
            }
            catch(err){
                console.log(err);
            }       
    }
    console.log(`🤝 New ${howmuch} Friendship 🤝`)
   
}
