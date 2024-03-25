import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Cart from './Cart.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      { path:"/",     element:<Home></Home>  },
      { path:"/about",element:<About></About>},
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/cart",
        element:<Cart></Cart>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </React.StrictMode>
);
