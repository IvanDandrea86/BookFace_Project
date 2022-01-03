import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Service } from "typedi";
import {Comment}  from "../../entities/comment.entity";

@Service() // Dependencies injection
@Resolver(() => Comment)
export default class CommentResolver {


}