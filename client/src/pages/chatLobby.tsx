import React from 'react';
import ChatLobbyList from '../components/Chat/ChatLobbyList';
import { useRouter } from 'next/router';

interface chatLobbyProps {

}

export const chatLobby: React.FC<chatLobbyProps> = ({}) => {
  const router = useRouter();
  const { bool, tid } = router.query;
  const parsedTid = Array.isArray(tid) ? parseInt(tid.pop()) : parseInt(tid);
    return (
      <>
      <ChatLobbyList tid={parsedTid} bool={bool}></ChatLobbyList>
      </>
    );
}

export default chatLobby;
