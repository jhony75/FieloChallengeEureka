import { Card } from './components/card/Card';
import { UsersList } from './components/usersList/UsersList';
import { StrictMode } from 'react';

import styles from './styles/app.module.scss';

export default function App() {
  return (
    <>
      <StrictMode>
        <h1>New Roots</h1>
        <div className={styles.cardsContainer}>
          <UsersList />
          <Card content="card" />
          <Card content="card" />
        </div>
      </StrictMode>
    </>
  );
}
