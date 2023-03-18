import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import ItemDetail from './itemDetail';
import { BrowserRouter as Router, Route  , Routes} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="app">
        This is React router!
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/shop" Component={Shop}/>
          <Route path="/shop/:id" Component={ItemDetail}/>
        </Routes>
        </div>
        <Nav/>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;