import { useEffect } from 'react/cjs/react.production.min';
import { Card } from './components/card/Card';
import { UsersList } from './components/usersList/UsersList';

import styles from './styles/app.module.scss';

export default function App() {
  useEffect;

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
}
