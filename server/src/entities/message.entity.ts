import { ObjectType, Field } from "type-graphql";
import {prop, getModelForClass} from "@typegoose/typegoose";

@ObjectType()
export class Message{

    @Field()
    @prop()
    _id!:string;

    @Field()
    @prop()
     sender_id : string;
    
    @Field()
    @prop()
     reciver_id!:String;
    
    @Field()
    @prop()
    createdAt: Date =new Date;

    @Field()
    @prop()
    updatedAt: Date = new Date;

    @Field()
    @prop()
    content !:string;

    @Field({defaultValue:false})
    @prop({default:false})
    read !:boolean;
    

}
export const MessageModel = getModelForClass(Message, { schemaOptions: { timestamps: true } });
