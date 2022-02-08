import React, { useEffect, useState } from 'react';
import { Box, Container } from '@chakra-ui/react';
import MapAnim from '../Assets/mapAnimation';
import { useSelector } from 'react-redux';
import { State } from '../../pages';
import SearchBar from '../SeachBar/SearchBar';
export default function Map() {
  // access items and user from store
  const items = useSelector((state: State) => state.items);
  const user = useSelector((state: State) => state.user);

  const [itemsRendered, setItemsRendered] = useState([]);
  const [foundItems, setFoundItems] = useState('');

  //Filtering searchbar dropdownlist to only display the item's name once if there are multiple of the same item
  let result = items.filter(function ({ name }) {
    return !this.has(name) && this.add(name);
  }, new Set());

  useEffect(() => {
    setItemsRendered(items);
  }, [items, foundItems]);

  //Search Bar on change will call this function and set a new state of the filtered keyword. If no keyword then state will be set to the list of items.
  const filter = (itemSearched) => {
    const keyword = itemSearched;
    if (keyword === null) {
      setItemsRendered(items);
    } else if (keyword.name !== '') {
      const results = items.filter((items) => {
        return items.name.startsWith(keyword.name);
      });
      setItemsRendered(results);
    } else {
      setFoundItems(keyword);
    }
  };

  return (
    <>
      <Container sx={searchStyle()}>
        <SearchBar onChange={filter} items={items} />
      </Container>
      <Box sx={bStyle()}>
        <MapAnim />
      </Box>
    </>
  );
}
function bStyle() {
  return {
    width: '365px',
    marginTop: '80px',
    marginLeft: '-12px',
    minHeight: '80px',
    maxHeight: '500px',
    overflowY: 'scroll',
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
  };
}
function searchStyle() {
  return {
    borderRadius: '12px 12px 0 0',
    width: '342px',
    margin: '0',
    padding: '20px 0px 15px 0',
    position: 'fixed',
    backgroundColor: 'white',
    zIndex: '1',
  };
}
