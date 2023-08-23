import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../HOme/Home/Home/Home";
import OrderList from "../Componets/OrderList/OrderList";
import Userorder from "../Componets/MenuItem/UserOrder/Userorder";

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
    ]);
export default router;