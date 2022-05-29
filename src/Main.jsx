import { useEffect } from 'react';
import { UsersList } from './components/usersList/UsersList';
import { UserData } from './components/userData/UserData';
import { UserFeed } from './components/userFeed/UserFeed';
import { auth } from './api/authRequest';

import styles from './styles/main.module.scss';

const Main = () => {
  useEffect(() => {
    auth();
  }, []);

  return (
    <>
      <h1>New Roots</h1>
      <div className={styles.cardsContainer}>
        <UsersList />
        <UserData />
        <UserFeed />
      </div>
    </>
  );
};

export { Main };
