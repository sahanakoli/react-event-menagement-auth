import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Details from "../pages/Details/Details";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader: () => fetch('/health.json')
        },
        {
          path:'/health/:id',
          element:<Details></Details>,
          loader: () => fetch('/health.json')
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;