import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


import {BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/portfolio' component={Portfolio} />
    </Router>
  );
}

export default App;
