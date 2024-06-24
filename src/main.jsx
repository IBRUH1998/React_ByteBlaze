import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Blogs from './Pages/Blogs.jsx'
import Root from './Components/Root/Root.jsx'
import Bookmarks from './Pages/Bookmarks.jsx'
import Blog from './Pages/Blog.jsx'
import Content from './Components/ArticleContent/Content.jsx'
import Author from './Components/ArticleAuthor/Author.jsx'
import  { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles'),
      },
      {
        path: '/blog/:id',
        element: <Blog></Blog>,
        loader: ({params}) =>
        fetch(`https://dev.to/api/articles/${params.id}`),

        children:[
        {
          index:true ,
          element:<Content></Content>,
          loader: ({params}) =>
            fetch(`https://dev.to/api/articles/${params.id}`),
        },
        {
          path:'author',
          element: <Author></Author> ,
          loader: ({params}) =>
            fetch(`https://dev.to/api/articles/${params.id}`),
        },
        ]

      },
      {
        path: 'bookmarked',
        element: <Bookmarks />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>,
)
