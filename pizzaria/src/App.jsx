import { useState } from 'react'
import '../src/assets/style.global.css'
import React from 'react';
import { Home } from './pages/home/home';
import { Sobre_nos } from './pages/sobre_nos/sobre_nos'
import { Menu } from './pages/menu/menu';
// import { Contatos } from './pages/contatos/contatos';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Galeria } from './pages/galeria/galeria';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/sobre",
    element: <Sobre_nos/>
  },
  {
    path: "/menu",
    element: <Menu/>
  },
  {
    path: "/galeria",
    element: <Galeria/>
  },
  // {
  //   path: "/contatos",
  //   element: <Contatos/>
  // },

]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}
export default App
