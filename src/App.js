import React, { Component } from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';
import DrawerToggleButton from './components/DrawerToggleButton';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    }); 
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
      
    }
    return (
      <Router>
        <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{marginTop: '64px'}}>        
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/techprof" exact component={Home} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/portfolio" exact component={Portfolio} />
            </Switch>
          </main>
        </div>
      </Router>
    )}



}

export default App;

