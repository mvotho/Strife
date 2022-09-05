import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from 'wagmi';
import { supabase } from '../supabaseClient';
import { CheckCircleIcon, UserPlusIcon, UsersIcon, XCircleIcon } from '@heroicons/react/24/solid'

const FriendsList = () => {

  const [friendState, setFriendState] = useState<string>("Friends");
  const user = localStorage.getItem("userid");

  const { data, error }: any = useQuery(["friends"], async () => {
    const { data } = await supabase
      .from("Friends")
      .select("*, statusCodes:FriendStatusCodes(id, Status), userDetails:Users!Friends_RequesterId_fkey(username, address)")
      .eq("AddressId", user)
    if (error) {
      console.log(error);
      return null;
    } else {
      return data;
    }
  });

  const tickIcon = <CheckCircleIcon className='h-6 w-6' />;
  const xIcon = <XCircleIcon className='h-6 w-6' />


  const friendComp = <div>Friends</div>

  const friendReq = data?.map((data: any) => (
    <div key={data.id} className="flex flex-row">
      <div className='mr-2'>{data.userDetails.username}</div><button>{tickIcon}</button><button>{xIcon}</button>
    </div>))

  return (

    <div className='flex flew-row'>
      <button onClick={() => { setFriendState("Friends") }}><UsersIcon className='h-6 w-6'></UsersIcon></button>
      <button onClick={() => { setFriendState("FriendReq") }}><UserPlusIcon className='h-6 w-6'></UserPlusIcon></button>
      {friendState === "Friends" ? friendComp : ''}
      {friendState === "FriendReq" ? friendReq : ''}
    </div>
  )
}

export default FriendsList

function setState() {
  throw new Error('Function not implemented.');
}
