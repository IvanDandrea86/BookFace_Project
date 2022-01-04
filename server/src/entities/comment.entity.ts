import { ObjectType, Field } from "type-graphql";
import {prop,getModelForClass} from "@typegoose/typegoose";

@ObjectType()
export class Comment{

    @Field()
    @prop()
    readonly comment_id!: number;
    
    @Field()
    @prop()    
    post_id !:string;
    
    @Field()
    @prop()    
    user_id !:string;
    
    @Field()
    @prop()
    createAt: Date =new Date;

    @Field()
    @prop()
    updatedAt: Date = new Date;

    @Field()
    @prop()
    content !:string;

}
export const CommentModel = getModelForClass(Comment, { schemaOptions: { timestamps: true } });
