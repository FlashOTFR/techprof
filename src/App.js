import React, { Component } from 'react'; 
import { render } from '@testing-library/react';
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';
import DrawerToggleButton from './components/DrawerToggleButton';
import Footer from './components/Footer';
import Home from './components/Home';

class App extends Component {
  state = {
    sideDrawerOpen: false
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

    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      <main style={{marginTop: '64px'}}>        
      <Home />
      </main>
      <Footer />
    </div>
    )}



}

export default App;

