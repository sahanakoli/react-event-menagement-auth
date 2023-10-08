import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Details from "../pages/Details/Details";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Events from "../pages/Events/Events";



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
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader: () => fetch('/health.json')
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/events',
          element:<Events></Events>,
          loader: () => fetch('/events.json')
        },
        {
          path:'/contact',
          element:<Contact></Contact>
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