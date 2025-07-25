import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Root = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>

  )
}

export default Root