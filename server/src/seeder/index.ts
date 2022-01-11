import {seedMongoWithUsers} from "./mockUser"
import {seedMongoWithPosts} from "./mockPost"
import {seedMongoWithComments} from "./mockComment"
import { seedMongoWithMessages } from "./mockmessage";
import { makeSomeFriend } from "./mockFriendship";
import { seedMongoWithFriendsRequest } from "./mockFiendrRequest";

export const startSeed=(size:number)=>{

    seedMongoWithUsers(size);
    seedMongoWithPosts(size*2);
    seedMongoWithComments(size*3);
    seedMongoWithMessages(size*3);
    makeSomeFriend(size);
    seedMongoWithFriendsRequest(size*2);

}
