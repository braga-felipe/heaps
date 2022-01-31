import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getOneItem } from '../redux/actions/items';
const IndexPage: NextPage = () => {
  const dispatch = useDispatch();
  dispatch(getOneItem());
  const item = useSelector((state) => state.items);
  return (
    <div className={styles.container}>
      <h1>hello World!</h1>
      <h2>{item}</h2>
    </div>
  );
};

export default IndexPage;
