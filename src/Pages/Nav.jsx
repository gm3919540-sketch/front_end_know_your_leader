import React from 'react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='h-[50px] w-screen bg-white shadow-sm rounded-xl px-4 py-2 flex justify-between'>
        <div className='font-bold ' >
            <h1>Know Your Leader </h1>
                 </div>
        <div className='font-bold ' > About us </div>
    
        <Link to ="/Login" >
        <Button variant='outline' >Login</Button>
        </Link>        
    </div>
  )
}
