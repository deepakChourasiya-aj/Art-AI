import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo } from './assets';
import { Home, CreatePost } from './pages';
// import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-rgb(18,19,25) sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <img src={logo} alt="logo" className='w-20 object-contain' />
        </Link>
        <Link to="/create-post" className='font-inter font-medium bg-[rgb(205,169,84)] text-black px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full text-white bg-[rgb(18,19,25)] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App