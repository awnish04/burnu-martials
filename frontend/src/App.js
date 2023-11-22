import React from 'react';

// import components
import Header from './components/Header'
import AnimRoutes from './components/AnimRoutes'
import Footer from './components/Footer';
// import router
import { BrowserRouter as Router } from 'react-router-dom';


function App  () {
  return(
    <>
    <Router>
      <Header/>
      <AnimRoutes/>
      <Footer/>
    </Router>
    </>
  );
};

export default App;
