import { Box } from '@chakra-ui/react';
import React from 'react';
import { useGetMyChatsQuery } from '../../generated/graphql';
import ChatLobbyItem from './chatLobbyItem';

interface chatLobbyListProps {
  chats?
}

export const ChatLobbyList: React.FC<chatLobbyListProps> = ({ chats }) => {

  const [ res, refreshLobby ] = useGetMyChatsQuery();
  const { data, error, fetching } = res;
  
  
  if (error) {
    console.log(error);
    return (
      <h1>Error Fetching Lobby</h1>
    );
  }
  if (fetching) {
    return (
      <h1>Fetching Lobby</h1>
    );
  }
  if (data) {
    console.log(data);
  }
    const myId = data.me.id;
    const lobbyChatList = data.me.chats.map(chat => {
      const userDetails = chat.users.filter(user => user.id !== myId).pop();
      return { 
        chatId: chat.id,
        itemName: chat.item.name,
        userName: userDetails.username,
        img_url: userDetails.img_url,
        lastMessageTime: chat.messages[chat.messages.length].createdAt
      };
    })

    return (
      <>
      <h1> ChatLobby </h1>
        {lobbyChatList.map(chat => {
          return <ChatLobbyItem key = {chat.chatId} chatId={chat.chatId} itemName={chat.itemName} userName={chat.userName} img_url={chat.img_url} lastMessageTime={chat.img_url} ></ChatLobbyItem>
        })}
      </>
    );
}

export default ChatLobbyList;