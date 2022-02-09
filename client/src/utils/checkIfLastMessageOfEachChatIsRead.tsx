export default function checkIfLastMessageOfEachChatIsUnread(chats) {
  return chats.some(
    (chat) =>
      chat.messages.length &&
      chat.messages[chat.messages.length - 1].isRead === false
  );
}
