import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Box,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import ItemCardButton from '../ButtonItemCard';

export function AccordionItemComponent({ item, buttonName, path }) {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'></Box>
              {isExpanded ? (
                <MinusIcon color='white' fontSize='12px' />
              ) : (
                <AddIcon color='white' fontSize='12px' />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text color='white'>{item.description}</Text>
            <ItemCardButton buttonName={buttonName} path={path} />
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}
