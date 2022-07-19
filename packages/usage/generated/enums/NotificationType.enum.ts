import * as NestJsGraphQL from "@nestjs/graphql";

export enum NotificationType {
  newPosts = "newPosts",
  newComments = "newComments",
  newFollowers = "newFollowers",
  reply = "reply",
  heartOnPost = "heartOnPost",
  heartOnComment = "heartOnComment",
  heartOnReply = "heartOnReply"
}
NestJsGraphQL.registerEnumType(NotificationType, {
  name: "NotificationType",
  description: undefined,
});
