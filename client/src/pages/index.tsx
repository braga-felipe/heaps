import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Container } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneItem } from '../redux/actions/items';

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();
  dispatch(getOneItem());
  const items = useSelector((state) => state.items);
  return (
    <Container className={styles.container}>
      <h1>hello World!</h1>
      <h2>{items}</h2>
    </Container>
  );
};

export default IndexPage;
