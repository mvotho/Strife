import React from 'react'
import { useAccount, useEnsName } from 'wagmi'

export const Address = () => {
    const { address, isConnecting, isDisconnected } = useAccount()
    const { data, isError, isLoading } = useEnsName({
        address: address,
      })

      
    if (isConnecting) return <div>Connecting…</div>
    if (isDisconnected) return <div>Disconnected</div>
    return <div>{address}, {data}</div>
}
