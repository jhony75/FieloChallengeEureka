import { Card } from './components/card/Card';
import { UsersList } from './components/usersList/UsersList';

import styles from './styles/main.module.scss';

const Main = () => {
  return (
    <>
      <h1>New Roots</h1>
      <div className={styles.cardsContainer}>
        <UsersList />
        <Card content="card" />
        <Card content="card" />
      </div>
    </>
  );
};

export { Main };
