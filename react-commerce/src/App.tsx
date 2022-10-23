import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYou from './pages/ThankYou/ThankYou';
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
  Checkout,
} from './pages';

function App() {
  return (
    <Router>
      <TopHeader promotion='Refreshing Cleansing Lotion NP 50% OFF' />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/omoss' element={<Omoss />} />
        <Route path='/produkt/:id' element={<ProductDetails />} />
        <Route path='/produkt' element={<Produkt />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
