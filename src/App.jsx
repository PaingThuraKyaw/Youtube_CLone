import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from './componets/Feed'
import Nav from './componets/Nav'
import Search from './componets/Search'
import VideoDetials from './componets/VideoDetials'

const App = () => {
  return (
    <div className='  font-sans'>
      <Nav/>
    <Routes>
      <Route path='/' element={<Feed/>} />
      <Route path='/search/:query' element={<Search/>} />
      <Route path='/video/:id' element={<VideoDetials/>} />
    </Routes>
    </div>
  )
}

export default App