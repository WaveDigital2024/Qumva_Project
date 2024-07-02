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

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        element: <EarnPoints></EarnPoints>
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
