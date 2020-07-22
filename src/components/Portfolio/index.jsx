import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

class Portfolio extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar />
            <div class="container">
    <div class="row">

        <div class="col-md-12">
            <section class="center"> 
                <h1>Welcome to my portfolio page! If you are here, you probably have an interest in seeing some of my work! Feel free to peruse some of my projects located here. Or if you prefer, you can check out my github by clicking the link in the footer!</h1>
            <div class="list">

                <ul>
                    <li>
    <a href='https://chargenproj.herokuapp.com/'>DnD Character Generator</a>
                    </li>
                        
                    <li>
    <a href='https://maximilianc88.github.io/ComiCall/'>ComiCall</a>
                    </li>
                        
                    <li>
    <a href='https://flashotfr.github.io/Homework5/'>Note Taker</a>
                    </li>
                        
                    <li>
    <a href='https://flashotfr.github.io/Homework3/'>Password Generator</a>
                    </li>
                        
                    <li>
    <a href='https://flashotfr.github.io/employee-tracker/'>Employee Tracker</a>'
                    </li>
                        
                    <li>
    <a href='https://flashotfr.github.io/burger/'>EAT DA BURGER</a>
                    </li>
                        
                </ul>
            </div>
            </section>
        </div>

    </div>
</div>
<Footer />
</div>
         );
    }
}
 
export default Portfolio;