import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Dashboard from './Dashboard'
import EditProduct from "./EditProduct"

export default function AdminApp(){
  return(
    <>
    <Routes>
          {/* <Route path="/dashboard/*" exact element={<div className="wrapper"><Dashboard /></div>} />
          <Route path="/edit/id" exact element={<div className="wrapper"><EditProduct /></div>}/> */}
    </Routes>
    </>
  )
}