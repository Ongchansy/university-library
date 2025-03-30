
import { auth } from '@/auth'
import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'

const CustomAvatar = async () => {
    const session =  await auth()
  return (
    <div className="flex gap-2 items-center">
                            <Avatar>
                                <AvatarFallback className="text-light-200 uppercase bg-teal-600 ">{session?.user?.name?.slice(0,2)}</AvatarFallback>
                               
                            </Avatar>
                            <p className='capitalize font-bold'>{session?.user?.name}</p>
        </div>
  )
}

export default CustomAvatar