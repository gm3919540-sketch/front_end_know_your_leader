import React from 'react'
import { Nav } from './Nav'
import { ALLPROFILE } from './ALLPROFILE'
import SearchBox from './SearchBox'

export const Home = () => {
  return (
    <>
    <div className='py-2 flex flex-col gap-4'>
    <Nav></Nav>
     <ALLPROFILE></ALLPROFILE>
    </div>
    </>
  )
}
