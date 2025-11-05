import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserInterface from './assets/Pages/UserInterface.jsx'
import AdminInterface from './assets/Pages/AdminInterface.jsx'
import HomePage from './assets/Components/AdminComponents/HomePage.jsx'
import ClientPage from './assets/Components/AdminComponents/Clients/ClientPage.jsx'
import DossierPage from './assets/Components/AdminComponents/Dossiers/DossierPage.jsx'
import RdvPage from './assets/Components/AdminComponents/Rdv/RdvPage.jsx'
import ArchivePage from './assets/Components/AdminComponents/Archives/ArchivePage.jsx'
import ProtectedRoute from './assets/Components/ProtectedRoute'
import RegistrerPage from './assets/Pages/Log/RegistrerPage.jsx'

const route = createBrowserRouter([

  {
    path: '/',
    element: <UserInterface/>
  },
  {
    path: '/acceuil',
    element: <AdminInterface  />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: '/acceuil/client',
        element: <ClientPage/>
      },
      {
        path: '/acceuil/dossier',
        element: <DossierPage/>
      },
      {
        path: '/acceuil/rdv',
        element: <RdvPage/>
      },
      {
        path: '/acceuil/archive',
        element: <ArchivePage/>
      },
      {
        path: '/acceuil/register',
        element: <RegistrerPage/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
