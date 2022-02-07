import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Box,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import ItemCardButton from '../ButtonItemCard';

export function AccordionItemComponent({ item, buttonName, path, counter }) {
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
            <Divider />
            <Heading sx={hStyle()}>{item.name}:</Heading>
            <Text sx={tStyle()}>{item.description}</Text>
            <Divider />
            {/* list of diets and allergies */}
            {item.diets.length
              ? item.diets.map((diet) => (
                  <Text sx={tStyle()} key={diet}>
                    - {capitalize(diet)}
                  </Text>
                ))
              : null}
            {item.allergies.length
              ? item.allergies.map((allergy) => (
                  <Text sx={tStyle()} key={allergy}>
                    - {addSpace(capitalize(allergy))}
                  </Text>
                ))
              : null}
            <Divider />
            <Heading sx={hStyle()}>Portions left: {counter}</Heading>
            <ItemCardButton buttonName={buttonName} path={path} />
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}
function hStyle() {
  return {
    marginTop: '5px',
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '100%',
    textAlign: 'left',
  };
}
function tStyle() {
  return {
    color: 'white',
    align: 'left',
    margin: '5px 0 5px 0',
  };
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addSpace(string) {
  return string.slice(0, -4) + ' ' + string.slice(-4);
}
