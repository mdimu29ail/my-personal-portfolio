import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomeLayout from './HomeLayout/HomeLayout.jsx';
import Home from './Home/Home.jsx';

import ProjectDetails from './Components/ProjectDetails/ProjectDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },

      {
        path: 'project/:id',
        element: <ProjectDetails />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
