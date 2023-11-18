import logo from './logo.svg';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import Sidebar from './pages/Sidebar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Banner from './pages/Banner';
import Navbar from './pages/Navbar';
import CategoryBanner from './pages/CategoryBanner';
import Category from './pages/Category';
import InsertCategory from './pages/InsertCategory';
import EditCategory from './pages/EditCategory';
import Product from './pages/Product';
import InsertProducts from './pages/InsertProducts';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pages/banner" element={<Banner />} />
          <Route path="/pages/categorybanner" element={<CategoryBanner/>}/>
          <Route path="/pages/category" element={<Category/>}/>
          <Route path="/pages/insertcategory" element={<InsertCategory/>}/>
          <Route path="/pages/editcategory/:catId" element={<EditCategory/>}/>
          <Route path="/pages/product" element={<Product/>}/>
          <Route path="/pages/insertproducts" element={<InsertProducts/>}/>
          <Route path="/pages/editproduct/:proId" element={<EditProduct/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
