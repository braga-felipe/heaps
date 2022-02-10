import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useAcceptItemClaimMutation } from '../../generated/graphql';

interface ClaimButtonProps {
  userOwnerId: number;
  myID: number;
  requesterId: number;
  itemID: number;
  takers;
}

export const ClaimButton: React.FC<ClaimButtonProps> = ({
  userOwnerId,
  myID,
  requesterId,
  itemID,
  takers
}) => {
  const [, acceptItemClaim] = useAcceptItemClaimMutation();
  const [isClaimed, updateIsClaimed] = useState(false);
  function handleClick() {
    acceptItemClaim({ options: { itemId: itemID, userId: requesterId } });
  }

  if (userOwnerId === myID && !isClaimed) {
    updateIsClaimed(true);
    return <Button onClick={handleClick}>Accept Request</Button>;
  } else if (userOwnerId === myID && isClaimed) {
    return <Button isDisabled={true}>Request Accepted</Button>; 
  } else if (takers && takers.includes(myID)) {
    return <Button isDisabled={true}>Request Accepted</Button>; 
  } else return null;
};
