import { Accordion } from '@chakra-ui/react';
import { AccordionItemComponent as AccordionItem } from './AccordionItem';
export function AccordionComponent() {
  return (
    <Accordion allowMultiple allowToggle>
      <AccordionItem />
    </Accordion>
  );
}
