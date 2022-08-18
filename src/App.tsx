import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Feed from './components/Feed';

export const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Feed></Feed>
    </QueryClientProvider>
  )
}

export default App
