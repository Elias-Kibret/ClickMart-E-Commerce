import "./App.css";
import {
  Header,
  TopNotification,
  Moto,
  TiitleBar,
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
