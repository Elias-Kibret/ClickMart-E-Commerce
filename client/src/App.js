import logo from "./logo.svg";
import "./App.css";
import {
  Header,
  TopNotification,
  Moto,
  TiitleBar,
  CountDownTimer,
  ProductCarousel,
} from "./components/index";
function App() {
  return (
    <div>
      <TopNotification />
      <Header />
      <Moto />
      <TiitleBar />
      <ProductCarousel />
    </div>
  );
}

export default App;
