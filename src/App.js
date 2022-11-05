import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Login from "./Routes/Auth/Login";
import Signup from "./Routes/Auth/Signup";

import ModifyProducts from "./Routes/ModifyProducts";
import Products from "./Routes/Products";
import SpecificProducts from "./Routes/SpecificProducts";
import NotFound from "./Routes/NotFound";
import Cart from "./Routes/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} /> {/* products */}
        <Route path='/products/:id' element={<SpecificProducts />} />
        {/* specific product */}
        <Route path='/cart' element={<Cart />} /> {/* cart */}
        <Route path='/auth/login' element={<Login />} /> {/* login */}
        <Route path='/auth/signup' element={<Signup />} /> {/* signup */}
        <Route path='/edit' element={<ModifyProducts />} />{" "}
        {/* update products ("add, update, delete") */}
        <Route path='*' element={<NotFound />} /> {/*404 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
