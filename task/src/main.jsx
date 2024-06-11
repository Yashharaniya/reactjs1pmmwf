import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './Layout'
import Add_Food from './Add_Food'
import Mange_food from './Mange_food'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Router>
        <Routes>
        <Route index path='/' element={<Layout/>}/>
          <Route  path='/addfood' element={<Add_Food/>}/>
          <Route  path='/managefood' element={<Mange_food/>}/>

        </Routes>
  </Router>

  </React.StrictMode>,
)
