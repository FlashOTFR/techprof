import React, { Component } from 'react';   
import Pic from './picture-min.jpg';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

<div className="container">
    <div className="row">

        <div className="col-md-12">
            <div className="center-home"> 
            <h1 className="name">RANDALL BURGESS</h1>
            <img src={Pic} className='pic' />
            </div>
        </div>

    </div>
</div>

</div>
         );
    }
}
 
export default Home;