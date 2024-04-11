import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shop from './Shop.jsx'
import Homepage from './Homepage.jsx'
import Cart from './Cart.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


//https://reactrouter.com/en/main/hooks/use-outlet-context
//https://stackoverflow.com/questions/73816951/how-to-provide-dynamic-custom-props-to-react-router-6-4-route
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Homepage />
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ]
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
