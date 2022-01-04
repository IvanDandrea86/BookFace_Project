import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LikeState {

    @Field({ defaultValue: 0 })
    count: number ;
    
    @Field(type=>[String])
    likelist :string[]
}
