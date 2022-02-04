import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Container, Heading } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllItems } from '../redux/actions/items';
import { useGet_All_ItemsQuery, useMeQuery } from '../generated/graphql';
import Home from '../components/Home/Home';
import { useEffect } from 'react';
import { getInitialUser } from '../redux/actions/user';
import SearchBar from '../components/SeachBar/SearchBar';

export interface State {
  user?;
  items?;
}

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();

  const getItemsList = () => {
    const [{ data }] = useGet_All_ItemsQuery();
    return data && data.getAllItems;
  };

  const getMeData = () => {
    const [{ data }] = useMeQuery();
    return data && data.me;
  };

  const itemList = getItemsList()
//   .map(item => {
//     return {
// SICK_points: item.SICK_points,
// allergies: item.allergies,
// archive: item.archive,
// complete: item.complete,
// createdAt: item.createdAt,
// description: item.description,
// diets: item.diets,
// id: item.id,
// isGroceries: item.isGroceries,
// name: item.name,
// owner: item.owner,
// ownerId: item.ownerId,
// servings: item.servings
//     }
//   });
  const meUser = getMeData();
  console.log('itemlist: ',itemList)

  useEffect(() => {
    dispatch(getAllItems(itemList));
    meUser && dispatch(getInitialUser(meUser));
  });

  return (
    <Container className={styles.container}>
      {meUser && <Heading>Hello, {meUser.username}!</Heading>}
      {/* <SearchBar /> */}
      <Home />
    </Container>
  );
};

export default IndexPage;
