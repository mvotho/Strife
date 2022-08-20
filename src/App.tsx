import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Feed from './components/Feed';
import ServerList from './components/ServerList';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true
    },
  },
});

// export const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Feed></Feed>
      {/* <ServerList></ServerList> */}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default App
