import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../pages/index';
import { Container, VStack } from '@chakra-ui/react';
import ItemCard from '../ItemList/ItemCard';
import SearchBar from '../../components/SeachBar/SearchBar';

interface ItemProp {
  id: number;
  name: string;
  description: string;
  complete: boolean;
  SICK_points: number;
  archive: boolean;
  isGroceries: boolean;
  ownerId: number;
}

export default function HomeList({ isGroceries, buttonName, path }) {
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
        <SearchBar
          onChange={filter}
          items={result
            .filter((item: ItemProp) => item.isGroceries === isGroceries)
            .map((item: ItemProp, index) => (
              <ItemCard
                user={user}
                item={item}
                key={index}
                buttonName={buttonName}
                path={path}
              />
            ))}
        />
      </Container>
      <Container sx={cStyle()}>
        {itemsRendered
          .filter((item: ItemProp) => item.isGroceries === isGroceries)
          .map((item: ItemProp, index) => (
            <ItemCard
              user={user}
              item={item}
              key={index}
              buttonName={buttonName}
              path={path}
            />
          ))}
      </Container>
    </>
  );
}
function cStyle() {
  return {
    marginTop: '80px',
    width: '335px',
    alignItems: 'center',
    zIndex: '0',
  };
}
function searchStyle() {
  return {
    borderRadius: '12px 12px 0 0',
    width: '327px',
    margin: '0',
    padding: '20px 0px 15px 0',
    position: 'fixed',
    backgroundColor: 'white',
    zIndex: '1',
  };
}
