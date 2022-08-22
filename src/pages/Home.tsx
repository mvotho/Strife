
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Link } from 'react-router-dom'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
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


function Home() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
          <div className="max-w-xl px-5 text-center">
            <h2 className="mb-2 text-[42px] font-bold text-zinc-800">Strife</h2>
            <div className='flex  items-center justify-center'><ConnectButton/></div>
            <Link to="/app" className="mt-3 inline-block w-96 rounded bg-flamingo px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-orange-700">Open the App →</Link>
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default Home