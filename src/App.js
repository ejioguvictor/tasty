import React from 'react'
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home'
// import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>

    </div>
  );
}

export default App;
