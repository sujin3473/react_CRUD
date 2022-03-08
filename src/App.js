import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "components/navBar";
import AddProduct from "containers/AddProduct";
import ProductList from "containers/ProductList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add/product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
