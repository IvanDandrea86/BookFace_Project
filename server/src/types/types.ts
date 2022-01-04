import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LikeState {
    @Field()
    state: boolean;
    @Field(type=>[String])
    likelist :string[]
}
