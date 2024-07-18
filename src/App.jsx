import {} from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom' 
import Login from './Pages/Login/Login'
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About Us/AboutUs';
import Contact from './Pages/Contact US/Contact';
import Offers from './Pages/Offers/Offers';
import Devices from './Pages/Devices/Devices';
import OfferOption from './Pages/Offers/Offer.option';
import Products from './Pages/Products/Products';
import Payment from './Pages/Payment/Payment';
import Service from './Pages/Service/Service';

// Import Styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route index path='/' element={<Home/>} />
            <Route  path='/home' element={<Home/>} />
            <Route  path='/about' element={<AboutUs/>} />
            <Route  path='/contact' element={<Contact/>} />
            <Route  path='/offers' element={<Offers/>} />
            <Route  path='/devices' element={<Devices/>} />
            <Route  path='/services' element={<Service/>} />


            <Route  path='/offer/option/:id' element={<OfferOption/>} />
            <Route  path='/products' element={<Products/>} />
            <Route  path='/product/payment/:id' element={<Payment/>} />


            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Login/>} />
          </Routes>
        </Router>
    </>

  )
}

export default App