import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

// import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import PagenotFound from './PagenotFound'
import AddEmployee from './components/Add_employee'
import MyContent from './components/Content'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
              <Route index path='/' element={<Layout/>}/>
              <Route  path='*' element={<PagenotFound/>}/>
              <Route  path='/add-employee' element={<AddEmployee/>}/>
              <Route  path='/Content' element={<MyContent/>}/>
              

     </Routes>
     </Router>
  </React.StrictMode>,
)
