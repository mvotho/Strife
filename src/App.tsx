import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Strife } from './pages/Strife';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true
    },
  },
});



function App() {

  return (
        <QueryClientProvider client={queryClient}>
          <Strife />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
  )
}

export default App
