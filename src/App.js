import React from "react";
import  ReactDOM from "react-dom";

import Body from "./Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import About from "./About";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./cart";
import Header from "./Header";
import Footer from "./Footer";
import Restmenuu from "./RestmenuCard";
import MidBody from "./MidBody";
import { Mid } from "./Mid";
import FoodCarousel from "./FoodCar";
import UserContext from "./UseContext";
import { useState } from "react";
import Help from "./Help";
import NewCart from "./NewCart";
import YourComponent from "./Getlocation";
const AppLayout=()=>{
 const [user,setUser]=useState({
  user:{
    lat:26.9124336,
    lng:75.7872709,
    loc:"jaipur"
  }
 })


  return (
 <UserContext.Provider value={{
  user:user,
  setUser:setUser,
 }} >
<Provider store={store}>
    
       <Header/>
      <Outlet />
      <Footer/>

   

  </Provider>

</UserContext.Provider>

);
}

const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <AppLayout />, // show component for particular path
    //   errorElement: <Error />, // show error component for path is different
      children: [
        // show children component for routing
        {
          path: "/",
          element: <MidBody />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path:"/newcart",
          element: <NewCart/>
        },
        {
          path:"/loc",
          element: <YourComponent/>
        },
        {
          path:"/help",
          element: <Help />,
        },
        {
          path: "/restaurant/:resId",
          element: <Restmenuu />,
        },
        {
          path:"/start",
          element:<Body/>
        },
        {
          path:"/md",
          element:<Mid/>
        },
        {
          path:"/foodc",
          element:<FoodCarousel/>
        }
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />);


