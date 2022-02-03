import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Container, Heading } from '@chakra-ui/react';
import Home from '../components/Home/Home';


const IndexPage: NextPage = () => {

  return (
    <Container className={styles.container}>
      <Heading>Home</Heading>
      <Home />
    </Container>
  );
};

export default IndexPage;
