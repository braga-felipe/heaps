
export default function checkIfChatExistsAndGenerateLink(item, currentUserId) {
 return item.chats.forEach(chat => {
    if (chat.users.forEach(user => user.id === currentUserId)) {
      //string path to chat lobby 
      return `chatLobby/?tid=${chat.id}&bool=true`
    } 
  })
}