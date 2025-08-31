import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Checkout from './Checkout.jsx';
import Payment from './Payment.jsx'
import Order from './Orders.jsx'
import { Login } from '@mui/icons-material';
import Loginpage from './Loginpage.jsx';
import { auth } from './firebase.jsx';
import { useStateValue } from './StateProvider.jsx';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders.jsx';
import HeaderBanner from './HeaderBanner.jsx';
import Prime from './Prime.jsx';
import Footer from './Footer/Footer.jsx';
// import ParticulerProduct from './ParticukerProduct/ParticulerProduct.jsx'


const stripePromise = loadStripe('pk_test_51RwzpjC1X0xfBVf8SAROyHkQzfRZGE10gkroco98Qc07lRR11k8Krh9rXlpJEZXiWJVbuie3EUrIE1Lib0AeYPji00d8kw8ofX');


function App() {

  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser

        })

      } else {
        // the user is logged out 
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])


  return (
    <Router>
      <div className="app">
        <Routes>

          {/* Oredrs router */}

          <Route path="/orders" element={
            <>
              <Header />
              <HeaderBanner />
              <Orders />
              <Footer />

            </>
          } />

          {/* 1st router */}

          <Route path="/login" element={
            <>

              <Loginpage />

            </>
          } />

          {/* 2nd router */}

          <Route path="/checkout" element={
            <>
              <Header />
              <HeaderBanner />
              <Checkout />
                <Footer />

            </>
          } />

          {/* 3rd route  */}
          {/* Wrap your Payment component */}
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <HeaderBanner />
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
                  <Footer />
              </>
            }
          />


          {/* 4th router(Home page)  */}

          <Route path="/" element={
            <>
              <Header />
              <HeaderBanner />
              <Home />
                <Footer />
            </>
          } />

          <Route path="/prime" element={
            <>
              <Header />
              <HeaderBanner />
              <Prime />
                <Footer />

            </>
          } />

          {/* <Route path="/selectedProduct" element={
            <>
              <Header />
              <HeaderBanner />
              <ParticulerProduct />
                <Footer />

            </>
          } /> */}

        </Routes>

      </div>
    </Router>
  );
}

export default App;
