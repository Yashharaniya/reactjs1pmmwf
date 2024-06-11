import React from 'react'
import SidebaarApp from './SidebaarApp'
import NavbarApp from './NavbarApp'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Add_Food from './Add_Food'

export default function Layout() {
  return (
    <div className="flex">
    <SidebaarApp />
    <div className="flex-grow p-6">
     <NavbarApp/>
    {/* <Add_Food/> */}
    </div>
  </div>
  )
}
