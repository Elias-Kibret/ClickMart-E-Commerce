import { createBrowserRouter } from "react-router-dom";
import {
  BillingDetails,
  Cart,
  Home,
  Layout,
  ProductDetails,
  SellerDashBoard,
  AddProduct,
  AdminDashboard,
  ReviewsTab,
  ApprovalTab,
  About,
  Sellerro,
} from "../pages";
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
        path: "productsDetail",
        element: <ProductDetails />,
      },
      {
        path: "seller-dashboard",
        element: <SellerDashBoard />,
      },

      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "approvals",
        element: <ApprovalTab />,
      },
      {
        path: "reviews",
        element: <ReviewsTab />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/my-products",
        element: <Sellerro />,
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
      {},
    ],
    element: <Layout />,
  },
]);
