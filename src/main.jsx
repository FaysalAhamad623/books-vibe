import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Home from './Components/Home/Home.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import ListedBooks from './ListedBooks/ListedBooks.jsx';
import { ToastContainer } from 'react-toastify';
import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>404 - Page Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "books/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json")
      },
      {
        path: "listedBooks",
        element: <ListedBooks />,
        loader: () => fetch("/booksData.json")

      },
      {
        path: "wishList",
        element: <ListedBooks />
      },
      {
        path:"logIn",
        element:<Login></Login>
      },
      {
        path:"signUp",
        element:<Signup></Signup>
      }
      ,

      {
        path: "dashboard",
        element: <Dashboard></Dashboard>

      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div >
      <RouterProvider router={router} />
      <ToastContainer />
    </div>


  </StrictMode>,
)
