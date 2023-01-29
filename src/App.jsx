import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/footer';
import MainPage from './components/MainPage/mainPage';
import Nav from './components/NavBar/nav';
import NavMobile from './components/NavBar/navMobile';
import Product from './components/Product/product';
import AddProduct from './pages/admin/addproduct';
import ProductList from './pages/admin/productList';
import { Login } from './pages/login';
import Profile from './pages/profile/profile';
import Shop from './pages/shop';
import SignUp from './pages/signup';

function App() {

  return (
    <div className="App">
      <header>
        <NavMobile />
        <Nav />
      </header>
      <main style={{ minHeight: '100vh' }} className='lg:mt-20'>
        <Routes >
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="product" element={<Product />} />
          <Route exact path="shop/:id" element={<Shop />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<SignUp />} />
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="admin/addproduct" element={<AddProduct />} />
          <Route exact path="admin/productList" element={<ProductList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
