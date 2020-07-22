import React, { Component } from 'react';   
import Navbar from '../Navbar';
import Footer from '../Footer';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

<Navbar />

<div class="container">
    <div class="row">

        <div class="col-md-12">
            <div class="center"> 
            <h1>WELCOME!</h1>
            <img src='/assets/images/picture.jpg' class='pic' />
            <br />
            <br />
            <p>My name is Randall Burgess, and I will soon be completing the web development boot camp program at UW!  For weeks now I have been training alongside my fellow students to put together one of the most sought after skill sets, currently on the job market.  I have found a strong passion for coding, and am ever excited to develop more programming skills.  It is my intention to make a career out of coding, so feel free to reach out to me with any job offers, or project contracts!</p>

            <p>For more information, please visit my LinkedIn or GitHub profiles, by clicking the links in the footer.  You can also view my resume <a href='/assets/files/Resume.pdf'>here!</a></p>
            </div>
        </div>

    </div>
</div>

<Footer />
</div>
         );
    }
}
 
export default Home;