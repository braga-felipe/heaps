import { Accordion } from '@chakra-ui/react';
import { AccordionItemComponent as AccordionItem } from './AccordionItem';
export function AccordionComponent({ item, buttonName, path }) {
  return (
    <Accordion allowMultiple allowToggle>
      <AccordionItem item={item} buttonName={buttonName} path={path} />
    </Accordion>
  );
}
