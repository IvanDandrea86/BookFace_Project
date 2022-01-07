import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Service } from "typedi";
import { Message, MessageModel } from "../../entities/message.entity";
import { ObjectId } from "mongodb";
import { UserModel } from "src/entities/user.entity";

@Service() // Dependencies injection
@Resolver(() => Message)
export default class MessageResolver {

    @Query(() => Message, { name: "findMessageById" })
    async findMessageById(@Arg("Message_id") message_id: string) {
      return await MessageModel.findOne({ _id: message_id });
    }
    @Query(() => [Message], { name: "findMessageByReciver" })
    async findPostByUser(@Arg("user_id") user_id: string): Promise<Message[]> {
      return MessageModel.find({ reciver_id :user_id });
    }
    @Query(() => [Message], { name: "findAllMessage" })
    async findAllPost(): Promise<Message[]> {
      return await MessageModel.find({});
    }

    @Mutation(() => Message, { name: "sendMessage" })
    async sendMessage(
    @Arg("content") content: string,
    @Arg("senderId") sender_id: string,
    @Arg("revicerId") reciver_id: string
  ) {
    const _id = new ObjectId();
    const Message = new MessageModel({
      _id,
      message_id: _id,
      sender_id: sender_id,
      reciver_id: reciver_id,
      content: content,
    });
     await UserModel.findOneAndUpdate({_id:sender_id},{$push:{messagesSent:_id}}).exec();
     await UserModel.findOneAndUpdate({_id:reciver_id},{$push:{messagesRecived:_id}}).exec();
    return await Message.save();
  }

  @Mutation(() => Message, { name: "deleteMessage" })
  async deleteMessage(
  @Arg("messageId") message_id: string,
) {
    MessageModel.findOneAndDelete({_id:message_id}).exec();
}
}