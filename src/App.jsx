import Card from './components/card/Card';
import './styles/global.scss';
import styles from './app.module.scss';
import { UsersList } from './components/usersList/UsersList';

export default function App() {
  return (
    <>
      <h1>Inside Query Client</h1>
      <div className={styles.cardsContainer}>
        <UsersList />
        <Card content="card" />
        <Card content="card" />
      </div>
    </>
  );
}
