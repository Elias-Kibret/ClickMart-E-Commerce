import { createBrowserRouter } from "react-router-dom";
import { BillingDetails, Cart, Home, Layout } from "../pages";
import SignUpForm from "../pages/auth/SignUpForm";
import { Products } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "auth",
        element: <SignUpForm />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "billing",
        element: <BillingDetails />,
      },
      {
        path: "products",
        element: <Products />,

        children: [
          {
            path: "products",
            element: <div>Product Component here.</div>,
          },
          {
            path: ":productId",
            element: <h1>Product Details</h1>,
          },
        ],
      },
    ],
    element: <Layout />,
  },
]);
