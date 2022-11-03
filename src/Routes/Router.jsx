import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'

const Router = () => {
  return (
    <div>


    <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='movie/:id' element={<h1>Movie detail page</h1>}></Route>
        <Route path='movies/:type' element={<h1> Movie List Page</h1>}></Route>
        <Route path='/*' element={<h1>Error Page</h1>}></Route>
    </Routes>




    </div>
  )
}

export default Router


