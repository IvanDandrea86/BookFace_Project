import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Service } from "typedi";
import {User}  from "../../entities/user.entity";

@Service() // Dependencies injection
@Resolver(() => User)
export default class UserResolver {


}