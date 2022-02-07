import React from 'react';
import ChatLobbyList from '../components/Chat/ChatLobbyList';
import { useRouter } from 'next/router';

interface chatLobbyProps {

}

export const chatLobby: React.FC<chatLobbyProps> = ({}) => {
  const router = useRouter();
  const { bool, tid } = router.query;
    return (
      <>
      <ChatLobbyList tid={tid} bool={bool}></ChatLobbyList>
      </>
    );
}

export default chatLobby;
