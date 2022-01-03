import { ObjectType, Field } from "type-graphql";
import {prop} from "@typegoose/typegoose";

@ObjectType()
export class Post{

    @Field()
    @prop()
    readonly post_id!: number;
    
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