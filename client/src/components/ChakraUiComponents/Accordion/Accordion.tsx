import { Accordion } from '@chakra-ui/react';
import { AccordionItemComponent as AccordionItem } from './AccordionItem';
export function AccordionComponent({ item }) {
  return (
    <Accordion allowMultiple allowToggle>
      <AccordionItem item={item} />
    </Accordion>
  );
}
