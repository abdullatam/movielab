import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
          <nav>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/movies" style={{ marginRight: '10px' }}>Movies</Link>
            <Link to="/movies/1" style={{ marginRight: '10px' }}>Movie Details (Example)</Link>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
