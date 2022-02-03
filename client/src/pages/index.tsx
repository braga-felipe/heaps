import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Container, Heading } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllItems, getOneItem } from '../redux/actions/items';
import { State } from '../components/Register/Register';
import { useGet_All_ItemsQuery, useMeQuery } from '../generated/graphql';
import { useEffect } from 'react';

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();
  const [{ data }] = useGet_All_ItemsQuery();
  const itemList = data && data.getAllItems;
  console.log({ itemList });
  useEffect(() => {
    dispatch(getAllItems(itemList));
  });

  const items = useSelector((state: State) => state.items);
  console.log({ items });
  // const [{ data, fetching }] = useMeQuery();

  return (
    <Container className={styles.container}>
      <Heading>Oi carai</Heading>
      {/* {data?.me ? (
        <Heading size='lg'> Hello {data.me.username}</Heading>
      ) : (
        <Heading size='lg'>hello World!</Heading>
      )}
      <Heading size='md'>{items}</Heading> */}
    </Container>
  );
};

export default IndexPage;
