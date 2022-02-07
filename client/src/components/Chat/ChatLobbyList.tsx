import { Box, Link, Button, Container } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetMyChatsQuery } from '../../generated/graphql';
import { State } from '../../pages';
import ChatLobbyItem from './chatLobbyItem';
import { MessagesContainer } from './MessagesContainer';
interface chatLobbyListProps {
  chats?;
  bool,
  tid
}

export const ChatLobbyList: React.FC<chatLobbyListProps> = ({ chats, bool, tid }) => {
  const [res, refreshLobby] = useGetMyChatsQuery();
  const { data, error, fetching } = res;

  const [isMessage, setIsMessage] = useState(bool ? bool : false);
  const [targetId, setTargetId] = useState(tid ? tid : 0);


  const user = useSelector((state: State) => state.user);
  console.log('CHATLOBBY USER', { user });

  if (error) {
    console.log(error);
    return <h1>Error Fetching Lobby</h1>;
  }
  if (fetching) {
    return <h1>Fetching Lobby</h1>;
  }
  if (data) {
    console.log(data);
  }
  const myId = data.me.id;
  const lobbyChatList = data.me.chats.map((chat) => {
    const userDetails = chat.users.filter((user) => user.id !== myId).pop();
    return {
      chatId: chat.id,
      itemName: chat.item.name,
      userName: userDetails.username,
      img_url: userDetails.img_url,
      lastMessageTime: chat.messages[chat.messages.length - 1].createdAt,
    };
  });

  const variables = {
    getChatId: targetId,
  };

  return isMessage ? (
    <>
      <MessagesContainer myID={myId} variables={variables} />
      <Button onClick={() => setIsMessage(false)}>Back to lobby</Button>
    </>
  ) : (
    <>
      <h1> ChatLobby </h1>
      {lobbyChatList.map((chat) => {
        return (
          <Button
            key={chat.chatId}
            // href={`http://localhost:3000/messages/${chat.chatId}`}
            onClick={(e) => {
              // e.target.id = `${chat.chatId}`
              setTargetId(chat.chatId);
              setIsMessage(true);
            }}>
            <ChatLobbyItem
              key={chat.chatId}
              chatId={chat.chatId}
              itemName={chat.itemName}
              userName={chat.userName}
              img_url={chat.img_url}
              lastMessageTime={chat.img_url}></ChatLobbyItem>
          </Button>
        );
      })}
    </>
  );
};

function wrapper() {
  return {
    margin: '0',
    padding: '0',
    height: '100%',
  };
}
export default ChatLobbyList;
