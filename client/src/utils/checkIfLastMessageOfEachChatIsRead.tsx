export default function checkIfLastMessageOfEachChatIsUnread(chats, myID) {
  return chats.some(
    (chat) =>
      chat.messages.length &&
      (chat.messages[chat.messages.length - 1].authorId !== myID) &&
      chat.messages[chat.messages.length - 1].isRead === false
  );
}
