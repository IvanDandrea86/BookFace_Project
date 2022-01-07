import { ObjectType, Field } from "type-graphql";
import {prop,getModelForClass} from "@typegoose/typegoose";

 


@ObjectType()
export class FriendRequest {

    @Field()
    @prop()
    _id!:string;

    @Field()
    @prop()
    createdAt: Date =new Date;

    @Field()
    @prop()
    updatedAt: Date = new Date;

    @Field()
    @prop()
     userSender!: string;
    
    @Field()
    @prop()
     userReciver!:string;

    @Field()
    @prop()
    status:string;
}
export const FriendRequestModel = getModelForClass(FriendRequest, { schemaOptions: { timestamps: true } });

