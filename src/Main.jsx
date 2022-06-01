import { UsersList } from './components/usersList/UsersList';
import { UserData } from './components/userData/UserData';
import { UserFeed } from './components/userFeed/UserFeed';

import styles from './styles/main.module.scss';
import { Authenticator } from './components/authenticator/authenticator';

const Main = () => {
  return (
    <>
      <h1>New Roots</h1>
      <div className={styles.cardsContainer}>
        <Authenticator />
        <UsersList />
        <UserData />
        <UserFeed />
      </div>
    </>
  );
};

export { Main };
