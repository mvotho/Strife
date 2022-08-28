import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Strife } from './pages/Strife';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  darkTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  useAccount,
  WagmiConfig,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { ChannelList } from './components/Server/ChannelList';
import UserHome from './pages/UserHome';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true
    },
  },
});

const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function App() {

  // const {isDisconnected } = useAccount()


  // if (isDisconnected) return <div>Disconnected</div>



  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
        accentColor: '#f25939'
      })}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/app" element={<UserHome/>}/>
              <Route path=":server" element={<Strife />}>
              <Route path=":channel" element={<ChannelList />} />
              </Route>
            </Routes>
          </BrowserRouter>
          {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        </QueryClientProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App
