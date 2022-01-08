import {seedMongoWithUsers} from "./user"
import {seedMongoWithPosts} from "./post"
import {seedMongoWithComments} from "./comment"

export const startSeed=()=>{

  seedMongoWithUsers(10);
  seedMongoWithPosts(20);
  seedMongoWithComments(20);

}
