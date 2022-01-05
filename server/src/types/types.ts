import { prop } from "@typegoose/typegoose";
import { Field, ObjectType,} from "type-graphql";

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


