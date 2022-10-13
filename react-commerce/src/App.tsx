import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  ProductDetails,
  TopHeader,
  Nav,
  Omoss,
  Error,
  Produkt,
  Footer,
  Cart,
  Kontakt,
} from './pages';
// import TopHeader from './components/TopHeader/TopHeader';
// import Nav from './components/Nav/Nav';
// import Omoss from './pages/Omoss/Omoss';
// import Error from './pages/Error/Error';
// import Produkt from './pages/Produkt/Produkt';
// import Footer from './components/Footer/Footer';
// import Cart from './pages/Cart/Cart';
// import Kontakt from './pages/Kontakt/Kontakt';

function App() {
  return (
    <Router>
      <TopHeader promotion='Refreshing Cleansing Lotion NP 50% OFF' />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/omoss' element={<Omoss />} />
        <Route path='/produkt/:id' element={<ProductDetails />} />
        <Route path='/produkt' element={<Produkt />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
