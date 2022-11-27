import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";

import LoginStatus from "./Components/LoginStatus";
import Login from "./Routes/Auth/Login";
import Signup from "./Routes/Auth/Signup";

import AddProduct from "./Routes/AddProduct";
import Products from "./Routes/Products";
import SpecificProducts from "./Routes/SpecificProducts";
import NotFound from "./Routes/NotFound";
import Cart from "./Routes/Cart";
import ModifyProducts from "./Routes/ModifyProducts.jsx";

function App() {
  return (
    <Router>
      <Header />
      <LoginStatus />
      <Routes>
        <Route path='/webshopping-pte' element={<Products />} />{" "}
        {/* products */}
        <Route path='/products/:id' element={<SpecificProducts />} />
        {/* specific product */}
        <Route path='/cart' element={<Cart />} /> {/* cart */}
        <Route path='/Login' element={<Login />} /> {/* login */}
        <Route path='/Signup' element={<Signup />} /> {/* login */}
        <Route path='/edit' element={<AddProduct />} />
        {<Route path='/edit/:id' element={<ModifyProducts />} />}
        {/* update products ("add, update, delete") */}
        <Route path='*' element={<NotFound />} /> {/*404 */}
      </Routes>
    </Router>
  );
}

export default App;
