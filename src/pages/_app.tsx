import NavBar from '@components/@shared/NavBar';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <QueryClientProvider client={queryClient}>
        <main>
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </>
  );
}
