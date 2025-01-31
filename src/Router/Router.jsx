import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdateProfile from "../Pages/UpdateProfile";

import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "../Components/PrivateRoutes";

import EstateDetails from "../Pages/EstateDetails";
import MyProfile from "../Pages/MyProfile";
import CartItem from "../Pages/CartItem";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/realEstateData.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: '/cart_item',
        element: <PrivateRoutes><CartItem></CartItem></PrivateRoutes>
      },

      {
        path: "/update_profile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },

      {
        path: "/estate_details/:id",
        loader: () => fetch("/realEstateData.json"),
        element: (
          <PrivateRoutes>
            <EstateDetails></EstateDetails>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;