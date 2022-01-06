import { ObjectType, Field } from "type-graphql";
import {prop, getModelForClass} from "@typegoose/typegoose";
import { LikeState } from "../types/types";
import { Comment } from "./comment.entity";

@ObjectType()
export class Post{

    @Field()
    @prop()
    _id!:string;

    @Field()
    @prop()
     post_id : string;
    
    @Field()
    @prop()
     user_id!:String;
    
    @Field()
    @prop()
    createdAt: Date =new Date;

    @Field()
    @prop()
    updatedAt: Date = new Date;

    @Field()
    @prop()
    content !:string;

    @Field({nullable:true})
    @prop()
    likeComment :LikeState=new LikeState;

    @Field(()=>[Comment])
    @prop({type:[Comment]})
    comments :Comment[]

    constructor (){
        this.comments= new Array<Comment>();
        }

}

export const PostModel = getModelForClass(Post, { schemaOptions: { timestamps: true } });
