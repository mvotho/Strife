import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Feed from './components/Feed';
import ServerList from './components/ServerList';

export const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Feed></Feed>
      <ServerList></ServerList>
    </QueryClientProvider>
  )
}

export default App
