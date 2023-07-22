import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './Pages/Signup';
import Login from './Pages/login';
import Home from './Pages/Home';
import GeneratedImage from './Pages/GeneratedImage'
import Pricing from './Pages/Pricing';
import Aboutus from './Pages/Aboutus';
//import Debugging from './Pages/Debugging';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  // {
  //   path: "",
  //   element: <Home />,
  // },

  {
    path: "home",
    element: <Home />,
  },

  {
    path: "signup",
    element: <Signup />,
  },

  {
    path: "login",
    element: <Login />,
  },

  {
    path: "GenerateImage",
    element: <GeneratedImage />,
  },

  {
    path: "Pricing",
    element: <Pricing />,
  },

  {
    path: "About Us",
    element: <Aboutus />,
  },

  // {
  //   path: "Debugging",
  //   element: <Debugging />,
  // },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
