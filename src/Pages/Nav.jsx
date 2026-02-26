import React from 'react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='h-[50px] w-full bg-white shadow-sm px-4 py-2 flex justify-between items-center'>
      
      <div className='font-bold'>
        <h1>Know Your Leader</h1>
      </div>

      <div className='font-bold'>
        About us
      </div>

      <Link to="/Login">
        <Button variant='outline'>Login</Button>
      </Link>

    </div>
  )
}
