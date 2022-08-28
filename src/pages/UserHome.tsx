import React from 'react'
import FriendsList from '../components/FriendsList'
import ServerList from '../components/ServerList'
import UserFeed from '../components/UserFeed'

const UserHome = () => {
    return (
        <div className='flex flex-col h-screen w-screen bg-dustgray'>
            <div className='flex flex-row w-screen'>
                <div className='w-1/6'>
                    <FriendsList></FriendsList>
                </div>
                <div className='w-5/6'>
                    <UserFeed></UserFeed>
                </div>
            </div>
                <ServerList></ServerList>
        </div>
    )
}

export default UserHome