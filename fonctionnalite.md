### User(Completed):
- FindUserById (Query)
- FindUserbyUsername (Query)
- FindAllUser (Query)
- UpdateUser (Mutation)
- CreateUser (Mutation)
- Login (Mutation)
- Logout (Mutation)
- DeleteUser (Mutation)
- DeleteAllUser (Mutation)
- AddFriend (Mutation)
- RemoveFriend (Mutation)

### Post(Completed):
- FindPostById (Query)
- FindPostByUser (Query)
- FindAllPost (Query)
- AddPost (Mutation)
- ModifyPost (Mutation)
- LikePost (Mutation)
- UnlikePost (Mutation) 
- DeletePost (Mutation)

### Comment(Completed):
- FindCommentById (Query)
- FindCommentByUser (Query)
- FindAllComment (Query)
- AddComment (Mutation)
- ModifyComment (Mutation)
- DeleteComment (Mutation)
- likes (Mutation)
- Unlikes (Mutation)
 
### FriendRequest (Completed)
- findFriendRequestByUser(Query)
- findAllFriendRequest(Query)
- createFriendRequest (@Mutation)
- acceptFriedRequest (@Mutation)
- refuseFriendRequest (@Mutation)

### Message (COmpleted)
- findMessageByReciver (Query)
- findAllMessageByUser (Query)
- findAllMessage (Query)
- sendMessage (Mutation)
- deleteMessage (Mutation)

To test session.cookies remember to set "request.credentials": "include"