import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../HOme/Home/Home/Home";
import OrderList from "../Componets/OrderList/OrderList";
import Userorder from "../Componets/MenuItem/UserOrder/Userorder";
import Dashboard from "../layout/Dashboard/Dashboard";
import Statistics from "../layout/Dashboard/Statistics/Statistics";

const router = createBrowserRouter([
      {
        path: "/",
        element:<App></App>,
        children: [
          {
            path: "/",
            element:<Home></Home>
          },{
              path:'/order',
              element:<Userorder></Userorder>
          },
        ],
      
      },

      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '', // Empty path for the default child route
            element: <Home></Home>
          },
          {
            path: 'statistics', // Relative path for the statistics child route
            element: <Statistics></Statistics>
          }
        ],
      }
      
    ]);
export default router;