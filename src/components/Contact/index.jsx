import React, { Component } from 'react';
import './style.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

class Contact extends Component {
    state = {  }
    render() { 
        return (
            <div> 
                <Navbar />
            <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <div className="center"> 
                            <h1>CONTACT ME</h1>
                            <br />
                            <br />
            <h2>Email:</h2>
            <h3>randallallenburgess@gmail.com</h3>
            <br />
            <h2>Phone Number:</h2>
            <h3>(360)402-2780</h3>
            <br />
            <a href="https://www.linkedin.com/in/randall-burgess-a93a8451/"><h3>LinkedIn</h3></a>
            <a href="https://github.com/FlashOTFR"><h3>GitHub</h3></a>
            </div>
        </div>

    </div>
</div>
    <Footer />
</div>
         );
    }
}
 
export default Contact;