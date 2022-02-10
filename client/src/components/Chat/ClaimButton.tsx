import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAcceptItemClaimMutation } from '../../generated/graphql';
import { State } from '../../pages';

interface ClaimButtonProps {
  userOwnerId: number;
  myID: number;
  requesterId: number;
  itemID: number;
  takers;
  complete: boolean;
}

export const ClaimButton: React.FC<ClaimButtonProps> = ({
  userOwnerId,
  myID,
  requesterId,
  itemID,
  takers,
  complete
}) => {
  const [, acceptItemClaim] = useAcceptItemClaimMutation();
  const [isClaimed, updateIsClaimed] = useState(complete);
  function handleClick() {
    acceptItemClaim({ options: { itemId: itemID, userId: requesterId } });
    updateIsClaimed(true);
  }
  const user = useSelector((state: State) => state.user);

  console.log(takers)
  if (userOwnerId === myID && !isClaimed) {
    return <Button onClick={handleClick}>Accept Request</Button>;
  } else if (userOwnerId === myID && isClaimed) {
    return <Button isDisabled={true}>You Accepted</Button>; 
  } else if (user.items_taken.filter((i) => i.id === itemID).length) {
    return <Button isDisabled={true}>Request Accepted</Button>; 
  } else return null;
};
