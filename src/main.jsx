import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserInterface from "./assets/Pages/UserInterface.jsx";
import AdminInterface from "./assets/Pages/AdminInterface.jsx";
import HomePage from "./assets/Components/AdminComponents/HomePage.jsx";
import ClientPage from "./assets/Components/AdminComponents/Clients/ClientPage.jsx";
import DossierPage from "./assets/Components/AdminComponents/Dossiers/DossierPage.jsx";
import RdvPage from "./assets/Components/AdminComponents/Rdv/RdvPage.jsx";
import ArchivePage from "./assets/Components/AdminComponents/Archives/ArchivePage.jsx";
import ProtectedRoute from "./assets/Components/ProtectedRoute";
import RegistrerPage from "./assets/Pages/Log/RegistrerPage.jsx";
import DocumentPage from "./assets/Components/AdminComponents/Documents/DocumentPage.jsx";
import FacturesPage from "./assets/Components/AdminComponents/Factures/FacturesPage.jsx";
import UserProfile from "./assets/Components/AdminComponents/Profile/UserProfile.jsx";
import ModifyProfil from "./assets/Components/AdminComponents/Profile/ModifyProfil.jsx";
import ModifyPassword from "./assets/Components/AdminComponents/Profile/ModifyPassword.jsx";
import NotePage from "./assets/Components/AdminComponents/Note/NotePage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const route = createBrowserRouter([
  {
    path: "/",
    element: <UserInterface />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminInterface />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/admin/client",
        element: <ClientPage />,
      },
      {
        path: "/admin/dossier",
        element: <DossierPage />,
      },
      {
        path: "/admin/rdv",
        element: <RdvPage />,
      },
      {
        path: "/admin/archive",
        element: <ArchivePage />,
      },
      {
        path: "/admin/register",
        element: <RegistrerPage />,
      },
      {
        path: "/admin/document",
        element: <DocumentPage />,
      },
      {
        path: "/admin/facture",
        element: <FacturesPage />,
      },
      {
        path: "/admin/note",
        element: <NotePage />,
      },
      {
        path: "/admin/profile",
        element: <UserProfile />,
        children: [
          {
            index: true,
            element: <ModifyProfil />,
          },
          {
            path: "/admin/profile/modify",
            element: <ModifyPassword />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
    <ToastContainer
      position="top-center"
      autoClose={1000}
      // hideProgressBar={false}
      toastStyle={{
        position: "fixed",
        top: "300px",
        // left: "-20px",
        width: "300px",
        height: "150px",
        boxShadow: "1px 2px 4px",
      }}
    />
  </StrictMode>,
);
