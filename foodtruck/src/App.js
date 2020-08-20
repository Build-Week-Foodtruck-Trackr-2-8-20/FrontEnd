import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Korean from './components/Korean';
import BBQ from './components/BBQ';
import Tacos from './components/Tacos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Tacos />
      <BBQ />
      <Korean />
      <Footer />
    </div>
  );
}

export default App;
