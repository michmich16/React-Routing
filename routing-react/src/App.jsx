import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blogs } from './pages/Blogs';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/Navbar/Navbar';
import {Concept} from './pages/Concept'
import {Contact} from './pages/Contact'
import { MainLayout } from './layout/MainLayout';
import './App.scss'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/concept' element={<Concept/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
