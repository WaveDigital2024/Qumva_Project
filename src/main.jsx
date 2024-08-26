import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'


// ------------
import Root from './Components/Layout/Root';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import EarnPoints from './Components/Pages/EarnPoints/EarnPoints';
import AllPosts from './Components/Pages/AllPosts/AllPosts';
import Authproviders from './Providers/Authproviders';
import Profile from './Components/Pages/Profile/Profile';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProviderWeb3Model from './Providers/WalletProviders';
import { QueryClientProvider } from '@tanstack/react-query';
import PointTransfer from './Components/PoinTransferSystem/PointTransfer';
import Layout from './Components/Dashboard/Layout'
import Dashboard from './Components/Dashboard/Dashboard'
import AddPosts from './Components/Dashboard/AddPosts'
import AddTasks from './Components/Dashboard/AddTasks'
import AdminRoute from './PrivateRoute/AdminRoute'
import ErorrPage from './Components/ErorrPage/ErorrPage'


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErorrPage></ErorrPage>,
    children: [
      {
        path: '/',
        element: <Home> </Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/earnpoints',
        element: <PrivateRoute><EarnPoints></EarnPoints></PrivateRoute>
      },
      {
        path: '/Post',
        element: <AllPosts></AllPosts>
      },
      {
        path: "/Profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path : "/Transection",
        element : <PrivateRoute><PointTransfer></PointTransfer></PrivateRoute>
      }
    ]
  },
  {
    path : "/admindashboard",
    element : <Layout></Layout>,
    children : [
      {
        path : "/admindashboard",
        element :<PrivateRoute><AdminRoute><Dashboard></Dashboard></AdminRoute></PrivateRoute>
      },
      {
        path : "/admindashboard/addpost",
        element :  <PrivateRoute><AdminRoute><AddPosts></AddPosts> </AdminRoute></PrivateRoute>
      },
      {
        path : "/admindashboard/addtask",
        element : <PrivateRoute><AdminRoute><AddTasks></AddTasks></AdminRoute></PrivateRoute>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
      <ProviderWeb3Model>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ProviderWeb3Model>

    </Authproviders>
  </React.StrictMode>,
)
