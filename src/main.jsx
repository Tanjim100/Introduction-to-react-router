import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import ErrorPage from './components/ErrorPage /ErrorPage.jsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/user',
          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
          element: <User></User>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/user/:userId',  // this ':' is used for dynamic values or id
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`), // 'params' is a variable. It is used for dynamic purpose 
          element: <UserDetails></UserDetails>
        },
        {
          path: '/posts',  // this ':' is used for dynamic values or id
          loader: () => fetch('https://jsonplaceholder.typicode.com/posts'), // 'params' is a variable. It is used for dynamic purpose 
          element: <Posts></Posts>
        },
        {
          path: '/posts/:postId',  // this ':' is used for dynamic values or id
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`), // 'params' is a variable. It is used for dynamic purpose 
          element: <PostDetails></PostDetails>
        }
      ] 
    },
    
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
