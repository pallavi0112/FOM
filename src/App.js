import React from 'react';
import './App.css';
import './index.css';
import Header from './components/Header/Header';
import Products from './components/productSection/Products';
import Topsells from './components/topsellingProduct/Topsells';
import Allproduct from './components/Allproduct/Allproduct';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
function App() {
  return (
   <>
    <Header/>
    <Products/>
    <Topsells/>
    <Allproduct/>
     <Feedback/>
     <Footer/>
   </>
  );
}

export default App;
