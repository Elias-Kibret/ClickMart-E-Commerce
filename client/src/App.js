import logo from "./logo.svg";
import "./App.css";
import { Header, TopNotification, Moto } from "./components/index";
function App() {
  return (
    <div>
      <TopNotification />
      <Header />
      <Moto />
    </div>
  );
}

export default App;
