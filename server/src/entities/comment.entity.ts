import { ObjectType, Field } from "type-graphql";
import {prop,getModelForClass} from "@typegoose/typegoose";
import { LikeState } from "../types/types";

@ObjectType()
export class Comment{

    @Field()
    @prop()
     _id !: string;

    @Field()
    @prop()
     comment_id : string =this._id;

    @Field()
    @prop()
    post_id !: String;
    
    @Field()
    @prop()
    user_id !: String;
    
    @Field()
    @prop()
    createAt: Date =new Date;

    @Field()
    @prop()
    updatedAt: Date = new Date;

    @Field()
    @prop()
    content !:string;

    @Field(type=>[LikeState])
    @prop()
    likeComment :LikeState;

}
export const CommentModel = getModelForClass(Comment, { schemaOptions: { timestamps: true } });
