import { ObjectType, Field } from "type-graphql";
import {prop, getModelForClass} from "@typegoose/typegoose";

@ObjectType()
export class User{

    @Field()
    @prop()
    readonly user_id!: number;
    
    @Field()
    @prop()
    createdAt: Date =new Date;

    @Field()
    @prop()

    updatedAt: Date = new Date;

    @Field()
    @prop()    
    user_name !:string;
    
    @Field()
    @prop()
    password !:string;

    @Field()
    @prop()
    email !:string;
}
export const UserModel = getModelForClass(User, { schemaOptions: { timestamps: true } });
