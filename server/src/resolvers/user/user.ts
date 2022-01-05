import {
  Resolver,
  Arg,
  Field,
  Query,
  Mutation,
  ObjectType,
  InputType,
} from "type-graphql";
import { Service } from "typedi";
import { User, UserModel } from "../../entities/user.entity";
import * as bcrypt from "bcrypt";
import { ObjectId } from "mongodb";



@InputType()
class UserInput {
  @Field()
  username: string;
  @Field()
  password: string;
  @Field()
  email: string;
}
@ObjectType()
class FieldError {
  @Field(() => String)
  field: string;
  @Field(() => String)
  message: string;
  constructor(field:string,message:string){
    this.field=field;
    this.message=message;
  }
}
@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => User, { nullable: true })
  user?: User;
}
@ObjectType()
class FriendResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => User, { nullable: true })
  user?: User;
}

@Service() // Dependencies injection
@Resolver(() => User)
export default class UserResolver {
  @Query(() => User, { name: "findUserById" })
  async findUserById(@Arg("user_id") _id: string) {
    return await UserModel.find({ _id: _id });
  }
  @Query(() => User, { name: "findUserByUsername" })
  async findUserByUsername(@Arg("username") username: string) {
    return await UserModel.find({ username: username });
  }
  @Query(() => [User], { name: "findAllUser" })
  async findAllUser() {
    return await UserModel.find({});
  }
  @Mutation(() => Boolean, { name: "deleateAllUser" })
  async deleteAllUser() {
    try {
      await UserModel.deleteMany();;
    } catch (err) {
      return false;
    }
    return true;
  }
  @Mutation(() => Boolean, { name: "deleteUser" })
  async deleteUser(
    @Arg("_id") id: string
  ) 
  {
    try {
      await UserModel.deleteOne({_id:id}).exec();
  }
  catch(err){
    console.error(err)
    return false
  }
  return  true
}

  @Mutation(() => UserResponse, { name: "createUser" })
  async createUser(@Arg("options") options: UserInput): Promise<UserResponse> {
    if (options.username.length < 6) {
      const error= new FieldError("username","Username must be at least 6") ;
      return {
        errors: [
         error
        ],
      };
    }

    if (
      !options.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    ) {
      const error= new FieldError("password","Password must be at least 8,contain at leat one digit, one uppercase and one lowercase character") 
      return {
        errors: [
         error,
        ],
      };
    }
    const hashPassword = await bcrypt.hash(options.password, 8);
    const _id = new ObjectId();
    const user = new UserModel({
      _id,
      user_id: _id,
      email: options.email,
      username: options.username,
      password: hashPassword,
    });
    try {
      await user.save();
    } catch (err) {
      console.error(err);
     let x= new Array<FieldError>()
      if (err.code === 11000 &&  err.keyPattern.email==1) {
        const error= new FieldError("email","email already exist") 
        x.push(error)
      }
     if (err.code === 11000 &&  err.keyPattern.username==1){
          const error1= new FieldError("username","username already exist") 
          x.push(error1)
        }
        console.log(x)
      return {
         errors: x
        };
    }
    return { user };
  }
  @Mutation(() => User, { name: "updateUser",nullable:true })
  async updateUser(
    @Arg("options") options: UserInput,
    @Arg("_id") id:string
    ):Promise<User | null>
  {
    await UserModel.where({_id:id}).updateOne({username:options.username}).exec()
    const user = await UserModel.findOne({_id:id}).exec();
    console.log(user)
    return user
       
   
  }
 
  @Mutation(() => Boolean, { name: "addFriend" })
  async addFriend(
    @Arg("user_id") user_id:string,
    @Arg("reciver_id") reciver_id:string,
  ):Promise<boolean> 
  {
    const user = await UserModel.where({_id:user_id})
    if(!user){
      return false
    }
    else{
      //Add controll already friend
      await UserModel.updateOne({ _id: user_id }, { $push: { friendList: reciver_id } })
      await UserModel.updateOne({ _id: reciver_id }, { $push: { friendList: user_id } })
      return true
    }
    
  }
  @Mutation(() => Boolean, { name: "removeFriend" })
  async removeFriend(
    @Arg("user_id") user_id:string,
    @Arg("reciver_id") reciver_id:string,
  ) 
  {
    const user = await UserModel.where({_id:user_id})
    if(!user){
      return false
    }
    else{
      await UserModel.updateOne({ _id: user_id }, { $pull: { friendList: reciver_id } })
      await UserModel.updateOne({ _id: reciver_id }, { $pull: { friendList: user_id } })
      return true
    }
    
  }



@Mutation(() => UserResponse, { name: "login" })
async login() //Params here
{
  //Logic Here
}
@Mutation(() => UserResponse, { name: "logout" })
async logout() //Params here
{
  //Logic Here
}


}