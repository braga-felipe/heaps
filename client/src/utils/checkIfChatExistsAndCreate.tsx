
export default function checkIfChatExistsAndCreate(item, currentUserId) {
  item.chats.forEach(chat => {
    if (chat.users.forEach(user => user.id === currentUserId)) {
      //string path to chat lobby 
      return 
    }
  })
}