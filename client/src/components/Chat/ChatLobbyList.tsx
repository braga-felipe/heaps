import { Box, IconButton, Button, Container, Heading } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Lobby from '../Assets/Lobby';
import Loading from '../Assets/Loading';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetMyChatsQuery } from '../../generated/graphql';
import { State } from '../../pages';
import checkIfLastMessageOfEachChatIsUnread from '../../utils/checkIfLastMessageOfEachChatIsRead';
import ChatLobbyItem from './chatLobbyItem';
import { MessagesContainer } from './MessagesContainer';
interface chatLobbyListProps {
  chats?;
  bool;
  tid;
}

export const ChatLobbyList: React.FC<chatLobbyListProps> = ({ bool, tid }) => {
  console.log('renderng chat lobby');
  const [res, refreshLobby] = useGetMyChatsQuery();
  const { data, error, fetching } = res;
  //

  const [isMessage, setIsMessage] = useState(bool ? bool : false);
  const [targetId, setTargetId] = useState(tid ? tid : 0);

  if (error) {
    console.log(error);
    return <h1>Error Fetching Lobby</h1>;
  }
  if (fetching) {
    return <Loading />;
  }
  if (data) {
  }
  const myId = data?.me.id;
  const lobbyChatList = data.me.chats.map((chat) => {
    const userDetails = chat.users.filter((user) => user.id !== myId).pop();
    return {
      chatId: chat.id,
      itemName: chat.item.name,
      userName: userDetails.username,
      img_url: userDetails.img_url,
      lastMessageIsRead: chat.messages.length
        ? chat.messages[chat.messages.length - 1].isRead
        : false,
    };
  });
  console.log(
    'CHECKING THE LAST MESSAGE',
    checkIfLastMessageOfEachChatIsUnread(data.me.chats)
  );
  const sortedList = lobbyChatList.sort(function (x, y) {
    return x.lastMessageIsRead === y.lastMessageIsRead
      ? 0
      : x.lastMessageIsRead
        ? -1
        : 1;
  });

  return isMessage ? (
    <>
      <IconButton
        aria-label='Back to Lobby'
        icon={<ArrowBackIcon />}
        sx={btnStyle()}
        onClick={() => setIsMessage(false)}>
        {'<'}
      </IconButton>
      <MessagesContainer chatId={targetId} />
    </>
  ) : (
    <Container>
      <Lobby />
      <Heading textAlign='center'> Chat Lobby </Heading>
      <Box sx={bStyle()}>
        {sortedList.map((chat, index) => {
          return (
            <Box key={index} height='85px'>
              <Button
                variant='ghost'
                key={chat.chatId}
                onClick={() => {
                  setTargetId(chat.chatId);
                  setIsMessage(true);
                }}>
                <ChatLobbyItem
                  key={chat.chatId}
                  chatId={chat.chatId}
                  itemName={chat.itemName}
                  userName={chat.userName}
                  img_url={chat.img_url}
                  lastMessageIsRead={chat.lastMessageIsRead}></ChatLobbyItem>
              </Button>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};
function btnStyle() {
  return {
    position: 'absolute',
    margin: '-2px 0 0 320px',
  };
}

function bStyle() {
  return {
    width: '340px',
    height: '500px',
    overflowY: 'scroll',
    marginTop: '230px',
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
  };
}

export default ChatLobbyList;
