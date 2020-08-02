import React, { Component } from 'react';
import './style.css';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Portfolio = () => {
    const cardInfo = [
        { image: "", title: "", text: ""},
        { image: "", title: "", text: ""},
        { image: "", title: "", text: ""},
        { image: "", title: "", text: ""},
        { image: "", title: "", text: ""},
        { image: "", title: "", text: ""}
    ];

        return ( 
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <section className="center">
                                <div className="center-text">
                                    <h1>Welcome to my portfolio page! If you are here, you probably have an interest in seeing some of my work! Feel free to peruse some of my projects located here. Or if you prefer, you can check out my github by visiting the contact page!</h1>
                                </div> 

                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card> 
                                
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
             );
        }
 
export default Portfolio;