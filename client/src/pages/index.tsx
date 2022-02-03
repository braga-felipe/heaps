import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Container, Heading } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneItem } from '../redux/actions/items';

import { useMeQuery } from '../generated/graphql';

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();
  dispatch(getOneItem());
  const items = useSelector((state) => state.items);

  const [{ data, fetching }] = useMeQuery();

  return (
    <Container className={styles.container}>
      {data?.me ? (
        <Heading size='lg'> Hello {data.me.username}</Heading>
      ) : (
        <Heading size='lg'>hello World!</Heading>
      )}
      <Heading size='md'>{items}</Heading>
    </Container>
  );
};

export default IndexPage;
