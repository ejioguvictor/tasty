import React from 'react'
import NavBar from './components/NavBar';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
