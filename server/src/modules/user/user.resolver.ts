import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Service } from "typedi";
import { User, UserModel } from "../../entities/user.entity";
import * as bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

@Service() // Dependencies injection
@Resolver(() => User)
export default class UserResolver {

  @Query(() => User , { name: "findById" })
  async findById(
    @Arg("user_id") _id: string) {
    return await UserModel.find({ _id: _id });
  }
  
  @Query(() => User, { name: "findByUsername" })
  async findByUsername(
    @Arg("username") username: string) {
    return await UserModel.find({ username: username });
  }
  @Query(() => [User], { name: "findAllUser" })
  async findAllUser() {
    return await UserModel.find({});
  }


  @Mutation(() => User , { name: "createUser" })
  async create(
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



}
