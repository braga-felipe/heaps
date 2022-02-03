
import React from 'react'
import ChatLobbyList from '../components/Chat/chatLobbyList'

interface chatLobbyProps {

}

export const chatLobby: React.FC<chatLobbyProps> = ({}) => {


    return (
      <>
      <ChatLobbyList></ChatLobbyList>
      </>
    );
}

export default chatLobby;