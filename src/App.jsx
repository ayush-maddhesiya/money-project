import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Landing from './Pages/Landing';

const App = () => (
  <div className="App">
    <Header />
    <Navbar />
    <Landing/>
    <Footer />
  </div>
);

export default App;
