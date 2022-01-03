import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Service } from "typedi";
import {User,UserModel}  from "../../entities/user.entity";
import * as bcrypt from 'bcrypt';

@Service() // Dependencies injection
@Resolver(() => User)
export default class UserResolver {

    @Query(() => [User], { name: 'users' })
    async findById(
        @Arg('user_id') user_id: number
    ) {
      return await UserModel.find({user_id:user_id});
    }
    @Mutation(() => User, { name: 'createUser' })
    async create(
      @Arg('username') username: string,
      @Arg('password') password: string,
      @Arg('email') email: string
    ) {
      const hashPassword = await bcrypt.hash(password, 8);
      return await UserModel.create({
        username,
        password: hashPassword,
        email,
      });
    } 


 
}