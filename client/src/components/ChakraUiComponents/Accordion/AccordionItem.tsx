import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Box,
  Heading,
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
            <Heading isTruncated sx={hStyle()}>
              {item.name}:
            </Heading>
            <Text color='white' align='left'>
              {item.description}
            </Text>
            <ItemCardButton buttonName={buttonName} path={path} />
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}
function hStyle() {
  return {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '100%',
    textAlign: 'left',
  };
}
