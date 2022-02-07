import React from 'react';
import { Box, Container, Flex, Image, Heading } from '@chakra-ui/react';

interface chatLobbyItemProps {
  itemName: string;
  userName: string;
  img_url: string;
  lastMessageTime: string;
  chatId: number;
}

export const ChatLobbyItem: React.FC<chatLobbyItemProps> = ({
  itemName,
  img_url,
}) => {
  return (
    <Container sx={cStyle()}>
      <Flex sx={fStyle()}>
        <Heading sx={hStyle()}>{itemName}</Heading>
        <Box>
          <Image
            sx={iStyle()}
            src={
              img_url ||
              'https://ca.slack-edge.com/T0WU5R8NT-U02GWRVJERW-72846fc663f1-512'
            }
            alt='profile'
          />
        </Box>
      </Flex>
    </Container>
  );
};

function iStyle() {
  return {
    borderRadius: 'full',
    boxSize: '80px',
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
