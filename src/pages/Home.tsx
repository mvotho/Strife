
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Link } from 'react-router-dom'
import { Address } from '../components/Address'



function Home() {

  return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
          <div className="max-w-xl px-5 text-center">
            <h2 className="mb-2 text-[42px] font-bold text-zinc-800">Strife</h2>
            <div className='flex  items-center justify-center'><ConnectButton /></div>
            <Link to="/app" className="mt-3 inline-block w-96 rounded bg-flamingo px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-orange-700">Open the App →</Link>
            <Address/>
          </div>
        </div>

  )
}

export default Home