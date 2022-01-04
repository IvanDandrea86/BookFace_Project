import { ObjectType, Field } from "type-graphql";
import {prop, getModelForClass} from "@typegoose/typegoose";


@ObjectType()
export class User{

    @Field()
    @prop()
     _id !: string;

    @Field()
    @prop()
     user_id : string = this._id;
    
    @Field()
    @prop()
    createdAt: Date =new Date;

    @Field()
    @prop()
    updatedAt: Date = new Date;

    @Field()
    @prop()    
    username !:string;
    
    @Field()
    @prop()
    password !:string;

    @Field()
    @prop()
    email !:string;

    @Field(type => [String])
    @prop()
    friendList :string[];


}
export const UserModel = getModelForClass(User, { schemaOptions: { timestamps: true } });
