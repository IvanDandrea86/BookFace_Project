import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Service } from "typedi";
import {Post}  from "../../entities/Post.entity";


@Service() // Dependencies injection
@Resolver(() => Post)
export default class PostResolver {


}