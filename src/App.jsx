import './App.css';
import { Route, Routes } from 'react-router-dom';

import NavBar from 'components/navBar';
import AddProduct from 'containers/AddProduct';
import ProductList from 'containers/ProductList';
import ModifyProduct from 'containers/ModifyProduct';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/modify/:idx" element={<ModifyProduct />} />
      </Routes>
    </div>
  );
}

export default App;
