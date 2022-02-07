import { Button } from '@chakra-ui/react';
import React from 'react';
import { useAcceptItemClaimMutation } from '../../generated/graphql';

interface ClaimButtonProps {
  userOwnerId: number;
  myID: number;
  requesterId: number;
  itemID: number;
}

export const ClaimButton: React.FC<ClaimButtonProps> = ({
  userOwnerId,
  myID,
  requesterId,
  itemID,
}) => {
  const [, acceptItemClaim] = useAcceptItemClaimMutation();

  function handleClick() {
    acceptItemClaim({ options: { itemId: itemID, userId: requesterId } });
  }

  if (userOwnerId === myID) {
    return <Button onClick={handleClick}>Accept Request</Button>;
  } else {
    return null;
  }
};
