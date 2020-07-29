import React, { Component } from 'react';   
import Pic from './picture-min.jpg';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

<div class="container">
    <div class="row">

        <div class="col-md-12">
            <div class="center-home"> 
            <h1>WELCOME!</h1>
            <img src={Pic} class='pic' />
            <br />
            <br />
            <p></p>
            </div>
        </div>

    </div>
</div>

</div>
         );
    }
}
 
export default Home;