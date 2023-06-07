  import React from 'react'
  import {Routes, Route} from 'react-router-dom'
  import Home from '../Pages/Home'
import UserDetails from '../Pages/UserDetails'
  function AllRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/userdetails/:id" element={<UserDetails/>} />
      </Routes>
    )
  }
  
  export default AllRoutes
  