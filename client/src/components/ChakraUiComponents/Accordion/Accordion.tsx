import { Accordion } from '@chakra-ui/react';
import { AccordionItemComponent as AccordionItem } from './AccordionItem';
export function AccordionComponent({ item, buttonName, counter, path }) {
  return (
    <Accordion allowMultiple allowToggle>
      <AccordionItem
        item={item}
        buttonName={buttonName}
        counter={counter}
        path={path}
      />
    </Accordion>
  );
}
