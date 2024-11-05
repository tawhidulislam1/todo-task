import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import AllCard from './components/Allcards/allCard';
import Statistics from './Statistics/Statistics';
import Root from './components/Root/Root';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Dashboard from './components/Dashbaord/Dashboard';
import Cart from './components/Cart/Cart';
import Favourite from './components/Favourite/Favourite';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <AllCard></AllCard>,
            loader:() => fetch('../data.json'),
          },
          {
            path: '/category/:category',
            element: <AllCard></AllCard>,
            loader:() => fetch('../data.json'),
          }
        ]
      },
      {
        path: "/categories/:product_id",
        loader: () => fetch('../data.json'),
        element: <ProductDetail></ProductDetail>
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashbaord",
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:'/dashbaord/cart',
            loader: () => fetch('../data.json'),
            element:<Cart></Cart>
          },
          {
            path:'/dashbaord/favourite',
            loader: () => fetch('../data.json'),
            element:<Favourite></Favourite>
          }
        ]
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
