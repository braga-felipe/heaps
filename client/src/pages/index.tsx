import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getOneItem } from '../redux/actions/items';

import { useMeQuery } from '../generated/graphql';

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();
  dispatch(getOneItem());
  const items = useSelector((state) => state.items);

  const [{ data, fetching }] = useMeQuery();


  return (
    <div className={styles.container}>
      {data?.me ? <h1> Hello {data.me.username}</h1> : <h1>hello World!</h1>}
      <h2>{items}</h2>
    </div>
  );
};

export default IndexPage;
