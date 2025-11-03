import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'react-datepicker/dist/react-datepicker.css';

import Header from './components/homepagecontent/Header'
import { BrowserRouter, createBrowserRouter,  createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy } from 'react'
import { Suspense } from 'react'

const SearchMovie=lazy(()=>import('./components/SearchMovie/SearchMovie'))
const HomeContent=lazy(()=>import('./components/homepagecontent/HomeContent'))
const Layout=lazy(()=>import('./components/OverallLayout/Layout'))
const AboutUs=lazy(()=>import('./components/NavbarComponents/AboutUs'))
const ContactUs=lazy(()=>import('./components/NavbarComponents/ContactUs'))
const SignUpPage=lazy(()=>import('./components/NavbarComponents/SignUpPage/SignUpPage'))
const Login=lazy(()=>import('./components/NavbarComponents/Login'))


function App() {
  const [count, setCount] = useState(0)
//ClientProvider for Search Movie
const queryclient=new QueryClient();
  const router=createBrowserRouter(
    createRoutesFromElements(
      <> 
   <Route element={<Layout/>}>
    <Route path='/' element={<HomeContent/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
     <Route path='/signup' element={<SignUpPage/>}/>
     <Route path='/login' element={<Login/>}/>
     
 <Route path='search-movie' element={<SearchMovie/>}/>
   
    
   </Route>
   
      </>
    )
  )



  return (
    <QueryClientProvider client={queryclient}>

   <RouterProvider  router={router}/>
    </QueryClientProvider>
  )
}

function wait(time){
  return new Promise(resolve=>{
    setTimeout(resolve,time)
  })
}

export default App
