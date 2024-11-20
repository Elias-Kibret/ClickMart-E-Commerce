import "./App.css";
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
    </div>
  );
}

export default App;
