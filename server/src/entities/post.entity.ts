import { ObjectType, Field } from "type-graphql";
import {prop, getModelForClass} from "@typegoose/typegoose";
import { LikeState } from "../types/types";

@ObjectType()
export class Post{

    @Field()
    @prop()
    _id!:string;

    @Field()
    @prop()
     post_id : string = this._id;
    
    @Field()
    @prop()
     user_id!:String;
    
    @Field()
    @prop()
    createAt: Date =new Date;

    @Field()
    @prop()
    updatedAt: Date = new Date;

    @Field()
    @prop()
    content !:string;

    @Field()
    @prop()
    likeComment :LikeState;

}

export const PostModel = getModelForClass(Post, { schemaOptions: { timestamps: true } });
