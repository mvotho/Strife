import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from 'wagmi';
import { supabase } from '../supabaseClient';
import {CheckCircleIcon, XCircleIcon} from '@heroicons/react/24/solid'

const FriendsList = () => {

  const user = localStorage.getItem("userid");

  const { data, error }:any= useQuery(["friends"], async () => {
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
  const xIcon = <XCircleIcon className='h-6 w-6'/>
  return (
    <div className='flex flew-row'>
      {data?.map((data:any) => (
        <div key={data.id}>
          {data.userDetails.username} has {data.statusCodes.Status} to be your friend</div>
      ))}
      <div className='flex flex-row items-center justify-center'>
      <button>{tickIcon}</button>
      <button>{xIcon}</button>
      </div>
      

    </div>
  )
}

export default FriendsList