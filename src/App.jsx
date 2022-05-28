import { Card } from './components/card/Card';
import { UsersList } from './components/usersList/UsersList';
import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import styles from './styles/app.module.scss';

// REFACTOR: Make this file an wrapper for a "main" component

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App() {
  return (
    <>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <h1>New Roots</h1>
          <ReactQueryDevtools initialIsOpen={false} />
          <div className={styles.cardsContainer}>
            <UsersList />
            <Card content="card" />
            <Card content="card" />
          </div>
        </QueryClientProvider>
      </StrictMode>
    </>
  );
}
