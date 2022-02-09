import React from 'react';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import Avatar from '../Assets/Avatar';

interface chatLobbyItemProps {
  itemName: string;
  userName: string;
  img_url: string;
  lastMessageIsRead: boolean;
  chatId: number;
}

export const ChatLobbyItem: React.FC<chatLobbyItemProps> = ({
  itemName,
  img_url,
  userName,
  lastMessageIsRead
}) => {
  return (
    <Container sx={cStyle()}>
      <Flex sx={fStyle()}>
      <Box display="flex" flexDirection="column" alignItems="left">
        <Heading isTruncated sx={hStyle()}>
          {itemName}
        </Heading>
        <Heading isTruncated sx={hStyle()}>
          {userName}
        </Heading>
      </Box>
        <Box>
          {!lastMessageIsRead ? <Image src={"/notification.png"} alt="unread" width="20px" height="20px" objectPosition="absolute" /> : null }
          <Avatar avatar={img_url}/>
        </Box>
      </Flex>
    </Container>
  );
};

function iStyle() {
  return {
    borderRadius: 'full',
    boxSize: '70px',
    margin: '5px',
  };
}

function fStyle() {
  return {
    justifyContent: 'space-between',
    alignItems: 'center',
  };
}

function cStyle() {
  return {
    border: '1px solid #E2E8F0',
    marginTop: '60px',
    marginLeft: '-10px',
    width: '325px',
    background: 'primary',
    borderRadius: ' 10px',
    boxShadow: '3px 3px 10px rgba(116, 65, 0, 0.2)',
  };
}

function hStyle() {
  return {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '22px',
  };
}

export default ChatLobbyItem;
