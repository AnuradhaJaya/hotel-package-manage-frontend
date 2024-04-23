import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Signup from "../pages/Signup";
import AdminPannel from "../pages/AdminPannel";
import AllUser from "../pages/AllUser";
import AllPackages from "../pages/AllPackages";
import CategoryPackages from "../pages/CategoryPackage";
import PackageDetails from "../pages/PackageDetails";
import PackageCategoryDetails from "../pages/PackageCategoryDetails";
import SearchPackage from "../pages/SearchPackage";
import Booking from "../pages/Booking";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "forgot-password",
          element: <ForgotPassword/>
        },
        {
          path: "signup",
          element:<Signup/>
        },
        {
          path: "package-category/:category",
          element:<CategoryPackages/> 
        },{
          path: "package-details/:id",
          element:<PackageDetails/> 
        },{
          path: "/package-category/:category/package-category-details/:id",
          element:<PackageCategoryDetails/>
        },{
          path: "search",
          element:<SearchPackage/>
        },{
          path : "booking/:id",
          element:<Booking/>
        },
        {
          path: "admin-panel",
          element:<AdminPannel/>,
          children : [
            {
              path : "all-users",
              element: <AllUser/>              
            }, 
            {
              path : "all-packages",
              element: <AllPackages/>            
            }

          ]
        }



      ]
    }
])  
export default router;