import { prop } from "@typegoose/typegoose";
import { Field, ObjectType,} from "type-graphql";
import {User} from '../entities/user.entity'

@ObjectType()
export class LikeState {

    @Field({ defaultValue: 0 })
    @prop({ default: 0 })
    count :number;
    
    @Field(()=>[String])
    @prop({type:[String]})
    likelist :string[]

    constructor (){
    this.count= this.likelist.length
    }
}
@ObjectType()
export class FriendRequestStatus {
    
    @Field({ defaultValue: false })
    @prop()
    accepted : boolean;

    @Field({ defaultValue: false })
    @prop()
    pending :boolean;

    @Field({ defaultValue: false })
    @prop()
    refused :boolean;
}

@ObjectType()
export class FieldError {
  @Field(() => String)
  field: string;
  @Field(() => String)
  message: string;
  constructor(field:string,message:string){
    this.field=field;
    this.message=message;
  }
}
@ObjectType()
export class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => User, { nullable: true })
  user?: User;
}
@ObjectType()
export class FriendResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => User, { nullable: true })
  user?: User;
}


