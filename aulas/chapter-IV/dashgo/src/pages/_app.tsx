import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SideBarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { makeServer } from '../services/mirage';
import { theme } from '../styles/theme';
//Verifica se nosso ambiente é o de desenvolvimento
if (process.env.NODE_ENV === 'development') {
  makeServer();
}
const queryClient = new QueryClient()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SideBarDrawerProvider >
          <Component {...pageProps} />
        </SideBarDrawerProvider>

      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>

  )
}

export default MyApp



