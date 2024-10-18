
import './App.css';
import NavBar from './components/NavBar.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/Style.css'
import Hero from './components/Hero';
import Delivery from './components/Delivery';
import Healthly from './components/Healthly';
import ProductSlider from './components/ProductSlider';
import Product from './components/Product.jsx';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Hero/>
     <Delivery/>
     <Healthly/>
     <ProductSlider/>
     <Product/>
     <Footer/>
     
    </div>
  );
}

export default App;
