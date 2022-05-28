import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Main } from './Main';
import { auth } from './api/fieloRequest';

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
        {auth()}
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Main />
        </QueryClientProvider>
      </StrictMode>
    </>
  );
}
