import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  ProductDetails,
  Error,
  Nav,
  Omoss,
  Signup,
  Produkt,
  Kontakt,
  Footer,
  TopHeader,
} from './pages/';

function App() {
  return (
    <Router>
      <TopHeader promotion='Refreshing Cleansing Lotion NP' />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/omoss' element={<Omoss />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/produkt/:id' element={<ProductDetails />} />
        <Route path='/produkt' element={<Produkt />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
