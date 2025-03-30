
import {signOut } from '@/auth'
import { LogOut } from 'lucide-react'
import React from 'react'

const Logout = () => {
    
  return (
    <div className="flex gap-3 items-center">
        <form
                    action={async () => {
                        "use server";
                        await signOut();
                    }}
                >
                    <button className='bg-none' type='submit'>
                        <LogOut 
                                cursor="pointer" 
                                className="rotate-180 text-red-300" 
                                width={16} 
                                height={16} 
                            />
                    </button>
                </form>
    </div>
  )
}

export default Logout