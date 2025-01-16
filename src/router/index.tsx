import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import ManageLayout from '../layouts/ManageLayout'
import QuestionLayout from '../layouts/QuestionLayout'
import Home from '../pages/Home'
import List from '../pages/manage/List'
import Trash from '../pages/manage/Trash'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import Star from '../pages/manage/Star'
import Edit from '../pages/question/Edit'
import Stat from '../pages/question/Stat'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },
      {
        // when all the pages above are not found, show the NotFound page
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  // exclude from the main layout
  // when the path is /question/edit/:questionId, show the QuestionLayout component
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:questionId',
        element: <Edit />,
      },
      {
        path: 'stat/:questionId',
        element: <Stat />,
      },
    ],
  },
])

export default router
