import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cakes from './pages/Cakes';
import Cupcakes from './pages/Cupcakes';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cakes' element={<Cakes/>}/>
          <Route path='/cupcakes' element={<Cupcakes/>}/>
          <Route path='/menu' element={<Menu/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
