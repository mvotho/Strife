import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'


const Login = () => {
    const {isConnecting, isDisconnected } = useAccount()

    

    if (isConnecting) return <div>Connecting…</div>
    if (isDisconnected) return <div>Connect Wallet to Sign In</div>
    return (

        <div>
           <Link to="/app" className="mt-3 inline-block w-96 rounded bg-flamingo px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-orange-700">Login →</Link>
        </div>

    )
}


export default Login