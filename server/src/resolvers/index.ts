
import PostResolver from "./post/post";
import UserResolver from "./user/user";
import CommentResolver from "./comment/comment";
import FriendRequestResolver  from "./friendRequest/friendRequest";
export const resolvers: [Function, ...Function[]] = [
    CommentResolver,
    UserResolver,
    PostResolver,
    FriendRequestResolver
  ];