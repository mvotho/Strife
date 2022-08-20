import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Feed from './components/Feed';
import ServerList from './components/ServerList';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChannelList } from './components/ChannelList';

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
      <div className='h-screen'>
        <div className='w-5/6'>
          <Feed></Feed>
        <ServerList></ServerList>
        </div>
      <div className='w-1/6'>
        <ChannelList></ChannelList>
      </div>
      </div>

      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default App
