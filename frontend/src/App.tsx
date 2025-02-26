import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Widgets from './components/widgets/Widgets';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import BuyWidgets from './components/widgets/BuyWidgets';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import ServiceWidgets from './components/widgets/ServiceWidgets';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Widgets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/buy-widgets" element={<BuyWidgets />} />
          <Route path="service-widgets" element={<ServiceWidgets />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
