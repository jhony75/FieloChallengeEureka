import { UsersList } from './components/usersList/UsersList';
import { UserData } from './components/userData/UserData';
import { UserFeed } from './components/userFeed/UserFeed';

import styles from './styles/main.module.scss';

const Main = () => {
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
