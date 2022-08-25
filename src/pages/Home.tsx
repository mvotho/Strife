
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Link } from 'react-router-dom'
import { Address } from '../components/Address'
import Login from '../components/Login'



function Home() {
    


  return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
          <div className="max-w-xl px-5 text-center">
            <h2 className="mb-2 text-[42px] font-bold text-zinc-800">Strife</h2>
            <div className='flex  items-center justify-center'><ConnectButton showBalance={false} accountStatus="address" /></div>
            <Login></Login>
            <Address/>
          </div>
        </div>
  )
}

export default Home