import { Box, Image } from '@chakra-ui/react';
import React from 'react'

interface chatLobbyItemProps {
    itemName: string,
    userName: string,
    img_url: string,
    lastMessageTime: string,
    chatId: number
}

export const ChatLobbyItem: React.FC<chatLobbyItemProps> = ({itemName, userName, img_url, lastMessageTime}) => {
    
    
    return (
        <>
        <Box maxW= "200px" maxH="50px" display="flex" flex-direction="row">
            <Box>
                <h1>{itemName}</h1>
                <p>{userName}, {lastMessageTime}</p>
            </Box>
            <Image src={img_url} maxW="40px" maxH="40px"/>

        </Box>
        </>
    );
}

export default ChatLobbyItem;