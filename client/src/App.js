import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import {
  Header,
  TopNotification,
  Moto,
  TiitleBar,
  ProductCarousel,
  ShoppingCart,
} from "./components/index";
import SignUpForm from "./pages/auth/SignUpForm";
import BillingDetails from "./components/BillingDetails";
import { AdminDashboard } from "./components/index";

function App() {
  return (
    <div>
      <TopNotification />
      <Header />
      <Moto />
      <TiitleBar />
      <ProductCarousel />
      <ShoppingCart />
      {/* <SignUpForm /> */}
      <BillingDetails />
      <AdminDashboard />
      {/* <SignUpForm /> */}
    </div>
  );
}

export default App;
