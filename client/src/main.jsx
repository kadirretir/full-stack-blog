import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './routes/Home.jsx'
import PostList from './routes/PostList.jsx'
import Write from './routes/Write.jsx'
import Login from './routes/Login.jsx'
import Register from './routes/Register.jsx'
import SinglePost from './routes/SinglePost.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Main from './layouts/Main.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient()


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}


const router = createBrowserRouter([
  {
    element: <Main />, // layout
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/posts",
        element: <PostList />
      },
      {
        path: "/:slug",
        element: <SinglePost />
      },
      {
        path: "/write",
        element: <Write />
      }, 
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  }

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
     <ToastContainer position='bottom-right' />
     </QueryClientProvider>
     </ClerkProvider>

</StrictMode>
)
