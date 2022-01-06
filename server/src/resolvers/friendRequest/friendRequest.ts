import { ObjectId } from "mongodb";

import { Resolver,  Mutation, Query, Arg } from "type-graphql";
import { Service } from "typedi";
import {FriendRequest, FriendRequestModel}  from "../../entities/friendRequest.entity";
import {UserModel} from '../../entities/user.entity'


@Service() // Dependencies injection
@Resolver(() => FriendRequest)
export default class FriendRequestResolver {

  @Query(()=> [FriendRequest], {name: "findFriendRequestByUser"})
  async findFriendRequestByUser(
    @Arg("user_id") user_id :string
  )
  {
    return FriendRequestModel.findOne({userSend:user_id})
  }
  @Query(()=> [FriendRequest], {name: "findAllFriednRequest"})
  async findAllFriendRequest(
  )
  {
    return FriendRequestModel.find({})
  }
  

    @Mutation(() =>  FriendRequest, { name: "createFriendRequest" })
  async createFriendRequest(
    @Arg("userSender") userSender:string,
    @Arg("userReciver") userReciver:string    
  ) {
    const _id = new ObjectId();
    const status = 'pending'
    const friendRequest=new FriendRequestModel({
      _id:_id,
      userSender:userSender,
      userReciver:userReciver,
      status: status
    })
    return await friendRequest.save();
  }
  @Mutation(() =>  Boolean, { name: "acceptFriendRequest" })
  async acceptFriendRequest(
    @Arg("userSender") userSender:string,
    @Arg("userReciver") userReciver:string  
  ) {
    await FriendRequestModel.findOneAndUpdate({userSender:userSender,userReciver:userReciver},
      {status:'accepted'})
    await UserModel.findOneAndUpdate({_id:userSender},{$push:{friendList:userReciver}})
    await UserModel.findOneAndUpdate({_id:userReciver},{$push:{friendList:userReciver}})
  
  return true;
  }

  @Mutation(() => Boolean, { name: "refuseFriendRequest" })
  async refuseFriendRequest(
    @Arg("userSender") userSender:string,
    @Arg("userReciver") userReciver:string  
  ) {
    await FriendRequestModel.findOneAndUpdate({userSender:userSender,userReciver:userReciver},
      {status:'refused'})
   return true
 }
}