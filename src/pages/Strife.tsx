
import { Navigate } from 'react-router-dom'
import { useAccount, useEnsName } from 'wagmi'
import { ChannelList } from '../components/Server/ChannelList'
import Feed from '../components/Server/Feed'
import ServerList from '../components/ServerList'

export const Strife = () => {

  const { isDisconnected } = useAccount()


  if (isDisconnected ) return <div><Navigate to="/" replace={true} /></div>


  return (
    <div className='flex flex-row h-screen bg-dustgray'>
        <div className='w-5/6'>
          <Feed></Feed>
          <ServerList></ServerList>
        </div>
        <div className='w-1/6'>
          <ChannelList></ChannelList>
        </div>
      </div>
  )
}
