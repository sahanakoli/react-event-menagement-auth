import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Details from "../pages/Details/Details";
import Registration from "../pages/Registration/Registration";



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
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        }
      ]
    },
  ]);

  export default router;