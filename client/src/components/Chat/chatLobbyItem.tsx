import React from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
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
  lastMessageIsRead,
}) => {
  return (
    <Container sx={cStyle()}>
      <Flex sx={fStyle()}>
        <Box display='flex' flexDirection='column' alignItems='left'>
          <Heading isTruncated sx={hStyle()}>
            {itemName}
          </Heading>
          <Heading isTruncated sx={hNameStyle()}>
            {userName}
          </Heading>
        </Box>
        <Box>
          {!lastMessageIsRead ? (
            <Container sx={notificationStyle()}>
              <Text fontSize='9'>!</Text>
            </Container>
          ) : null}
          <Avatar avatar={img_url} />
        </Box>
      </Flex>
    </Container>
  );
};

function notificationStyle() {
  return {
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    padding: '0px',
    zIndex: '1000',
    marginLeft: '40px',
    position: 'absolute',
    backgroundColor: '#BC1818',
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
    height: '80px',
    color: 'white',
    boxShadow: '3px 3px 10px rgba(116, 65, 0, 0.2)',
  };
}

function hStyle() {
  return {
    marginTop: '15px',
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '22px',
  };
}
function hNameStyle() {
  return {
    marginTop: '5px',
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '22px',
  };
}

export default ChatLobbyItem;
