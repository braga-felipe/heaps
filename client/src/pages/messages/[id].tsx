import React from 'react';
import { useRouter } from 'next/router';

interface MessagesProps {

}

export const Messages: React.FC<MessagesProps> = ({}) => {
  const router = useRouter()
  const { id } = router.query;

  
    return ();
}