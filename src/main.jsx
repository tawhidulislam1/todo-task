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
        path: "/Statistics",
        element: <Statistics></Statistics>,
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
