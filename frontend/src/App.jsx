import Header from './components/Header'
import React from 'react'
import { ToastContainer } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
   <>
   <Header />
   <ToastContainer />
   <Outlet/>
   </>
  )
}

export default App