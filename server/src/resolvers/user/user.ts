import { Resolver, Arg, Field, Query, Mutation, InputType, Ctx } from "type-graphql";
import { Service } from "typedi";
import { User, UserModel } from "../../entities/user.entity";
import * as bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import { UserResponse, FieldError, MyContext } from "../../types/types";
import { PostModel } from "../../entities/post.entity";
import { COOKIENAME } from "../../constants/const";
import { FriendRequestModel } from "../../entities/friendRequest.entity";

declare module 'express-session' {
       interface SessionData {
           userID: string;
      }
    }


@InputType()
export class UserInput {
  @Field()
  password: string;
  @Field({ nullable: true })
  email: string;
}

@Service() // Dependencies injection
@Resolver(() => User)
export default class UserResolver {
  @Query(() => User,{ name: "whoAmI",nullable:true })
  async me(@Ctx() {req}: MyContext) {
    if (!req.session.userID) {
      return null;
    }
    return UserModel.findOne({_id:req.session.userID});
  }
  

  @Query(() => User, { name: "findUserById" })
  async findUserById(@Arg("user_id") _id: string) {
    return await UserModel.findOne({ _id: _id });
  }
  @Query(() => User, { name: "findUserById" })
  async findUserByEmail(@Arg("user_id") email: string) {
    return await UserModel.findOne({ email: email });
  }

  @Query(() => [User], { name: "findAllUser" })
  async findAllUser() {
    return await UserModel.find({});
  }
  @Mutation(() => Boolean, { name: "deleateAllUser" })
  async deleteAllUser() {
    try {
      await UserModel.deleteMany({});
    } catch (err) {
      return false;
    }
    return true;
  }
  @Mutation(() => Boolean, { name: "deleteUser" })
  async deleteUser(@Arg("_id") id: string) {
    try {
      await UserModel.deleteOne({ _id: id }).exec();
      await PostModel.deleteMany({user_id:id}).exec();
      const document=await UserModel.find({})
      document.forEach(element => {
        if (element.friendList.includes(id)){
         element.friendList = element.friendList.filter(e=> e!==id);
        element.save();
        }
      });
    } catch (err) {
      console.error(err);
      return false;
    }
    return true;
  }

  @Mutation(() => UserResponse, { name: "createUser" })
  async createUser(
    @Arg("options") options: UserInput,
    @Arg("firstname") firstname: String,
    @Arg("lastname") lastname: String,
    @Ctx() {req}:MyContext
     ): Promise<UserResponse> {
   if (
      !options.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    ) {
      const error = new FieldError(
        "password",
        "Password must be at least 8,contain at leat one digit, one uppercase and one lowercase character"
      );
      return {
        errors: error,
      };
    }
    const hashPassword = await bcrypt.hash(options.password, 8);
    const _id = new ObjectId();
    const user = new UserModel({
      _id,
      user_id: _id,
      email: options.email,
      password: hashPassword,
      firstname : firstname,
      lastaname:lastname
    });
    try {
      await user.save();
    } catch (err) {
      console.error(err);
      if (err.code === 11000 && err.keyPattern.email == 1) {
        const error = new FieldError("email", "email already exist"); 
      return {
        errors: error
      };
    }
  }
    req.session.userID=user._id;
    return {user};
  }
  @Mutation(() => User, { name: "updateUser", nullable: true })
  async updateUser(
    @Arg("options") options: UserInput,
    @Arg("_id") id: string
  ): Promise<User | null> {
    await UserModel.where({ _id: id })
      .updateOne({ emaile: options.email })
      .exec();
    const user = await UserModel.findOne({ _id: id }).exec();
    return user;
  }

  @Mutation(() => Boolean, { name: "addFriend" })
  async addFriend(
    @Arg("user_id") user_id: string,
    @Arg("reciver_id") reciver_id: string
  ): Promise<boolean> {
    const user = await UserModel.findOne({ _id: user_id });
    const reciver = await UserModel.findOne({_id:reciver_id})
    if (!user || ! reciver) {
      return false;
    } 
      await UserModel.updateOne(
        { _id: user_id },
        { $push: { friendList: reciver_id } }
      );
      await UserModel.updateOne(
        { _id: reciver_id },
        { $push: { friendList: user_id } }
      );
      await FriendRequestModel.findOneAndUpdate({userSender:user_id},{status:"accepted"})
      return true;
    }
  
  @Mutation(() => Boolean, { name: "removeFriend" })
  async removeFriend(
    @Arg("user_id") user_id: string,
    @Arg("reciver_id") reciver_id: string
  ) {
    const user = await UserModel.where({ _id: user_id });
    if (!user) {
      return false;
    } else {
      await UserModel.updateOne(
        { _id: user_id },
        { $pull: { friendList: reciver_id } }
      );
      await UserModel.updateOne(
        { _id: reciver_id },
        { $pull: { friendList: user_id } }
      );
      return true;
    }
  }
  @Mutation(() => UserResponse, { name: "login" })
  async login(
    @Arg("options") options: UserInput,
    @Ctx() {req}:MyContext
  ): Promise<UserResponse> {

    const userEmail = await UserModel.findOne({ email: options.email });

    if (!userEmail && options.email != null) {
      return {
        errors: 
          {
            field: "Email",
            message: "'that email doesn't exist'",
          },
        
      };
    }
    if (userEmail != null) {
      const validEmailPassword = await bcrypt.compare(
        options.password,
        userEmail!.password
      );
      if (!validEmailPassword) {
        return {
          errors: 
            {
              field: "Password",
              message: "wrong password",
            }   
        };
      } else {
        const user = userEmail.toObject();
        req.session.userID=user.user_id;
        return { user };
      }
    }
    return {};
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIENAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }

        resolve(true);
      })
    );
  }
}
