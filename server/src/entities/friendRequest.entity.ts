import { ObjectType, Field } from "type-graphql";
import {prop,getModelForClass} from "@typegoose/typegoose";
import { FriendRequestStatus } from "../types/types";  
 


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
     userSend!: string;
    
    @Field()
    @prop()
     userRecive!:string;

    @Field()
    @prop()
    status!:FriendRequestStatus;

   
}
export const FriendRequestModel = getModelForClass(FriendRequest, { schemaOptions: { timestamps: true } });

