import React, { Component } from 'react';
import './style.css';     


class Timer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Timer">
                <h1>{this.props.date.toLocaleTimeString()}</h1>    
            </div>
         );
    }
}
 
export default Timer;