import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <div>Test</div>
    </QueryClientProvider>
  )
}

export default App
