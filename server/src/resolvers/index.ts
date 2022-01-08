
import PostResolver from "./post/post";
import UserResolver from "./user/user";
import CommentResolver from "./comment/comment";
import FriendRequestResolver  from "./friendRequest/friendRequest";
import MessageResolver from "./message/messge";
export const resolvers: [Function, ...Function[]] = [
    CommentResolver,
    UserResolver,
    PostResolver,
    FriendRequestResolver,
    MessageResolver
  ];