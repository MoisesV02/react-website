import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Footer from './components/pages/Footer'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
      </Routes>
      <Home></Home>
    </Router>
    </>
  );
}

export default App;
