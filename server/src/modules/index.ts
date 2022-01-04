import UserResolver from './user/user.resolver';
import CommentResolver from './comment/comment.resolver';
import PostResolver from './post/post.resolver';

// Important: Add all your module's resolver in this
export const resolvers: [Function, ...Function[]] = [
  UserResolver,
  PostResolver,
  CommentResolver,
];