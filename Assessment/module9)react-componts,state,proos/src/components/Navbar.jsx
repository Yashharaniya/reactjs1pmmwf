import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    <nav className='font-bold bg-black p-5 flex items-center justify-between' >

    <Link to='/' className='text-white mr-5 text-4xl align-baseline cursor-pointer'>Digital Agency</Link>
       
      <ul className='inline-flex  space-x-8 text-2xl text-white cursor-pointer'>
         <Link to='*'><li>About</li></Link>
        <Link to='*'><li>Features</li></Link>
        <Link to='*'><li>FAQs</li></Link>
        <Link to='/add-employee'><li>Account</li></Link>

 
      </ul>
   
    </nav >
  )
}
