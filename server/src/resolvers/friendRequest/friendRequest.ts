import { Resolver,  Mutation } from "type-graphql";
import { Service } from "typedi";
import {FriendRequest}  from "../../entities/friendRequest.entity";



@Service() // Dependencies injection
@Resolver(() => FriendRequest)
export default class FriendRequestResolver {

    @Mutation(() =>  FriendRequest, { name: "createFriendRequest" })
  async createFriendRequest(
    //Params here
  ) {
    //Logic Here
  }
  @Mutation(() =>  FriendRequest, { name: "acceptFriendRequest" })
  async acceptFriendRequest(
    //Params here
  ) {
    //Logic Here
  }
  @Mutation(() => FriendRequest, { name: "refuseFriendRequest" })
  async refuseFriendRequest(
    //Params here
  ) {
    //Logic Here
  }
}