import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';

import Root from './components/Root/Root';

import ErrorPage from './components/Error/Error';
import About from './components/About/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Task from './Task/Task';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UpdateTask from './Task/UpdateTask';
import PrivateRoute from './Route/PrivateRoute';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/registers",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/task",
        element: <PrivateRoute><Task></Task></PrivateRoute>,
      },
      {
        path: "/updateTask/:id",
        element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
        loader: ({ params }) => fetch(`https://gadget-heaven-server-alpha.vercel.app/task/${params.id}`)
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
