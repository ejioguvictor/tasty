import React from 'react'
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
