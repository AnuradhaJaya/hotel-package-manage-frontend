import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "pages/Home";
import Offers from "../pages/Offers";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CategoryPackages from "../pages/CategoryPackage";
import PackageDetails from "../pages/PackageDetails";
import PackageCategoryDetails from "../pages/PackageCategoryDetails";
import SearchPackage from "../pages/SearchPackage";
import Booking from "../pages/Booking";
import Admin from "../layouts/admin";
import Default from "../views/admin/default";
import UsersDetail from "../pages/AllUser";
import OffersDetail from "../pages/AllPackages";
import SendEmail from "../pages/SendEmail"
import Email from "../views/admin/email/index"
import FeedbackForm from "pages/FeedbackForm";
import Feedback from "../views/admin/feedback/feedbackList"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "package-category/:category",
        element: <CategoryPackages />,
      },
      {
        path: "offers/package-details/:id",
        element: <PackageDetails />,
      },
      {
        path: "package-category/:category/package-category-details/:id",
        element: <PackageCategoryDetails />,
      },
      {
        path: "search",
        element: <SearchPackage />,
      },
      {
        path: "booking/:id",
        element: <Booking />,
      },
      {
        path: "send-email/",
        element: <SendEmail />,
      },
      {
        path: "feedback/",
        element: <FeedbackForm />,
      },
      // admin panel
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "default",
            element: <Default />,
          },
          {
            path: "users-detail",
            element: <UsersDetail />,
          },
          {
            path: "offers-detail",
            element: <OffersDetail />,
          },
          {
            path: "email-marketing",
            element: <Email />,
          },
           {
             path: "all-feedback",
             element: <Feedback />,
           },
        ],
      },

    ],
  },
]);
export default router;
