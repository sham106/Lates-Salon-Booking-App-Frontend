import Book from 'components/Book';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Home from 'components/Home';
import ScrollToTop from 'components/ScrollToTop';
import { motion } from 'framer-motion';
import React from 'react';
import {BrowserRouter , Routes, Route, useLocation,  } from 'react-router-dom';


function App() {



  return (
    // <Router>
    <BrowserRouter>
      <motion.div initial="hidden" animate="show">
      
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/book' element={<Book />} />
      </Routes>
      <Footer />
    <ScrollToTop />
      </motion.div>
    </BrowserRouter>    
     
  );
}


export default App;