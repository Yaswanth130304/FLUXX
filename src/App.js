import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/home';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
// import Services from './components/pages/Services';
import Products from './components/pages/Product';
import Login from './components/pages/Login/index';
import Signup from './components/pages/Singup/index';
import BookForm from './components/pages/Book/BookingForm';
import Confirm from './components/pages/confirm';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
              <Route path='/' exact element={<Home/> } />
              {/* <Route path='/services' element={<Services/>} /> */}
              <Route path='/products' element={<Products/>} />
              <Route path='/Login' exact element={<Login/>} />
              <Route path="/signup" exact element={<Signup />} />
			        <Route path="/login" exact element={<Login />} />
              <Route path='/BookForm' exact element={<BookForm/>}/>
              <Route path='/Confirm' exact element={<Confirm/>}/>
        </Routes>
        </Router>
    </>
  );
}

export default App; 