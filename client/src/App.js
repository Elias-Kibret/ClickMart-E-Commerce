import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  TopNotification,
  Moto,
  TiitleBar,
  ProductCarousel,
  ShoppingCart,
} from "./components/index";
import { AdminDashboard } from "./components/index";
import { ProductDetails } from "./pages/product/ProductDetails";
import { Layout, Cart, SignUpForm, Home, BillingDetails } from "./pages/index";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route index path="/cart" element={<Cart />} />
            <Route exact path="/auth" element={<SignUpForm />} />
            <Route exact path="/billing" element={<BillingDetails />} />
            {/* <Route exact path="/students/" element={<Student />} />
            <Route exact path="/students/:id" element={<StudentsDetails />} />
            <Route
              exact
              path="/selected-student"
              element={<SelectedStudent />}
            />
            <Route exact path="/course/:id" element={<Course />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
