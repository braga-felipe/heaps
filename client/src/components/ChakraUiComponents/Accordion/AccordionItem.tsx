import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
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
              <Box flex='1' textAlign='left'>
                {/* {item.name} */}
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize='12px' />
              ) : (
                <AddIcon fontSize='12px' />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>
              {item.description}
            </p>
            <ItemCardButton buttonName={buttonName} path={path} />
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}
