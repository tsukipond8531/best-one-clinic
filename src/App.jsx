import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About Us/AboutUs';
import Contact from './Pages/Contact US/Contact';
import Offers from './Pages/Offers/Offers';
import Devices from './Pages/Devices/Devices';
import OfferOption from './Pages/Offers/Offer.option';
import Payment from './Pages/Payment/Payment';
import Service from './Pages/Service/Service';
import Complaints from './Pages/Contact US/Complaints';
import Footer from './Pages/Footer/Footer';
import Profile from './Pages/Profile/Profile';
import Cart from './Pages/Cart/Cart';
import Fav from './Pages/Favorite/Fav';
import ShowComplaints from './Admin Pages/Show Complaints/ShowComplaints';
import CreateOffer from './Admin Pages/Create Offer/CreateOffer';
import ShowAllOffer from './Admin Pages/Create Offer/ShowAllOffer';
import UpdateOffer from './Admin Pages/Create Offer/UpdateOffer';
import AllUsersFav from './Admin Pages/Show Favorite/AllUsersFav';
import UsersFav from './Admin Pages/Show Favorite/UsersFav';

// Import Styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import Api File
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './Redux/Reducers/user';

function App() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.data)
  // console.log(user.data);

  useEffect(() => {
    dispatch(fetchUserData())
  }, [])

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/complaints' element={<Complaints />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/devices' element={<Devices />} />
          <Route path='/services' element={<Service />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorite' element={<Fav />} />


          <Route path='/offer/category/:category' element={<OfferOption />} />
          <Route path='/product/payment/:id' element={<Payment />} />

          {/* Admin Routes */}
          {user?.data?.user?.role == 'admin' &&
            <>
              <Route path='/admin/allComplaints' element={<ShowComplaints />} />
              <Route path='/admin/createOffer' element={<CreateOffer />} />
              <Route path='/admin/showAllOffers' element={<ShowAllOffer />} />
              <Route path='/admin/offer/update/:id' element={< UpdateOffer />} />
              <Route path='/admin/allFav' element={< AllUsersFav />} />
              <Route path='/admin/allFav/item/:favId' element={< UsersFav />} />
            </>
          }


          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>

  )
}

export default App