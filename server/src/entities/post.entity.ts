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
    likes :LikeState=new LikeState;

    @Field(()=>[String])
    @prop({type:[String]})
    comments :String[]

    constructor (){
        this.comments= new Array<String>();
        }

}

export const PostModel = getModelForClass(Post, { schemaOptions: { timestamps: true } });
