import React from "react";
import './App.css';
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import {createBrowserRouter,RouterProvider,Route,Outlet} from 'react-router-dom';
import Details from "./pages/Details/Details";


const Layout = ()=>{
  return (
    <>
       <Nav /> 
      <Outlet />
      <Footer />
    </>
  )  
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/pokemon/:id',
        element:<Details/>
      },
     
    ]
    
  },
  
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
