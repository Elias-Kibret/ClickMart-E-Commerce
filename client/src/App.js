import "./App.css";
import {
  Header,
  TopNotification,
  Moto,
  TiitleBar,
  ProductCarousel,
  BillingDetails,
} from "./components/index";
function App() {
  return (
    <div>
      <TopNotification />
      <Header />
      <Moto />
      <TiitleBar />
      <ProductCarousel />
      <BillingDetails />
    </div>
  );
}

export default App;
