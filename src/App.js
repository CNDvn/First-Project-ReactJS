import React from 'react';
import './App.css';
import Home from './component/home/Home/Home.jsx';
import Navbar from './component/home/navbar/Navbar.jsx'
import Footer from './component/footer/Footer.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
