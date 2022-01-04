import { Resolver, Arg,Field, Query, Mutation,ObjectType,InputType } from "type-graphql";
import { Service } from "typedi";
import { User, UserModel } from "../entities/user.entity";
import * as bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

@InputType()
class UsernamePasswordInput {
    @Field()
    username:string
    @Field()
    password:string
}
@ObjectType()
class FieldError{
    @Field(()=>String)
    field: string
    @Field(()=>String)
    message: string
}
@ObjectType()
class UserResponse
{
    @Field(()=>[FieldError], {nullable:true})
    errors?:FieldError[]
    @Field(()=>User, {nullable:true})
    user?: User;
}
@ObjectType()
class FriendResponse
{
    @Field(()=>[FieldError], {nullable:true})
    errors?:FieldError[]
    @Field(()=>User, {nullable:true})
    user?: User;
}




@Service() // Dependencies injection
@Resolver(() => User)
export default class UserResolver {

  @Query(() => User , { name: "findUserById" })
  async findUserById(
    @Arg("user_id") _id: string) {
    return await UserModel.find({ _id: _id });
  }
  
  @Query(() => User, { name: "findUserByUsername" })
  async findUserByUsername(
    @Arg("username") username: string) {
    return await UserModel.find({ username: username });
  }
  @Query(() => [User], { name: "findAllUser" })
  async findAllUser() {
    return await UserModel.find({});
  }


  @Mutation(() => User , { name: "createUser" })
  async createUser(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Arg("email") email: string
  ) {
    const hashPassword = await bcrypt.hash(password, 8);
    let _id = new ObjectId();
    let user_id = _id;
    return await UserModel.create({
      _id,
      user_id,
      username,
      password: hashPassword,
      email,
    });
  }
  @Mutation(() => User , { name: "updateUser" })
  async updateUser(
    //Params here
  ) {
    //Logic Here
  }
  @Mutation(() =>  UserResponse, { name: "login" })
  async login(
    //Params here
  ) {
    //Logic Here
  }
  @Mutation(() => UserResponse , { name: "logout" })
  async logout(
    //Params here
  ) {
    //Logic Here
  }
  @Mutation(() => UserResponse , { name: "deleteUser" })
  async deleteUser(
    //Params here
  ) {
    //Logic Here
  }
    @Mutation(() => FriendResponse , { name: "addFriend" })
  async addFriend (
    //Params here
  ) {
    //Logic Here
  }
  
   @Mutation(() => FriendResponse , { name: "removeFriend" })
  async removeFriend(
    //Params here
  ) {
    //Logic Here
  }
}
