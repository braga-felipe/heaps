import React from 'react';
import { useMeQuery } from '../../generated/graphql';
import { useGetMyChatsQuery } from '../../generated/graphql';
import { useGetMyItemsQuery } from '../../generated/graphql'

interface chatLobbyListProps {
  chats?
  id
}

export const ChatLobbyList: React.FC<chatLobbyListProps> = ({ chats }) => {

  const [ res, refreshLobby ] = useGetMyItemsQuery();
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



    return (
      <h1> ChatLobby </h1>
    );
}

export default ChatLobbyList;