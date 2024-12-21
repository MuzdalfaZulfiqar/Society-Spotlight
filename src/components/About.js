// components/About.js

import React from 'react';
import about from '../Images/about.png';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
    return (
        <div>
              <Navbar/>
            {/* Section 1: About */}
            <section className="text-center text-white py-5" style={{ backgroundColor: '#1D1B5D' }}>
                <div className="container">
                    <h1>About Us</h1>
                </div>
            </section>

            {/* Section 2: Introduction */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                        <p className="text-center">
                    At Society Spotlight, we believe in the power of collaboration and community. 
                    Our platform is dedicated to empowering university societies by providing them with the tools to connect, grow, and showcase their achievements. 
                    With a mission to bring like-minded individuals together, we help societies promote their events, recruit new members, and foster innovation through teamwork. 
                    Whether you're part of a technical club, a cultural society, or anything in between, Society Spotlight is here to help you shine and make an impact on campus and beyond.
                </p>                        </div>
                        <div className="col-md-6">
                            <div className="" style={{ width: '100%', height: '100%' }}>
                                <img src={about} alt="Mission" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ backgroundColor: '#1D1B4D', color: 'white', padding: '50px 0' }}>
            <Container>
                <Row className="text-center">
                    {/* First Stat - Societies */}
                    <Col md={4} className="mb-4">
                        <div className="stat-item">
                            <h2 className="display-4">10+</h2>
                            <p className="lead">Societies</p>
                        </div>
                    </Col>

                    {/* Second Stat - Events */}
                    <Col md={4} className="mb-4">
                        <div className="stat-item">
                            <h2 className="display-4">50+</h2>
                            <p className="lead">Events</p>
                        </div>
                    </Col>

                    {/* Third Stat - Members */}
                    <Col md={4} className="mb-4">
                        <div className="stat-item">
                            <h2 className="display-4">1000+</h2>
                            <p className="lead">Members</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

            {/* Section 3: Testimonials */}
            <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
                <div className="container text-center">
                    <h3 className="mb-4">Testimonials</h3>
                    <p className="pb-2 mb-md-5 pb-md-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p>

                    {/* Testimonial Cards */}
                    <Row className="d-flex justify-content-center">
                        <Col md={4} className="mb-4">
                            <div className="card">
                                <div className="d-flex justify-content-center mb-4">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" className="rounded-circle shadow-1-strong" width="150" height="150" alt="Maria Smantha" />
                                </div>
                                <h5 className="mb-3">Maria Smantha</h5>
                                <h6 className="text-primary mb-3">Web Developer</h6>
                                <p className="px-xl-3">
                                    <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                </p>
                                <ul className="list-unstyled d-flex justify-content-center mb-0">
                                    <li><i className="fas fa-star fa-sm text-warning"></i></li>
                                    <li><i className="fas fa-star fa-sm text-warning"></i></li>
                                    <li><i className="fas fa-star fa-sm text-warning"></i></li>
                                    <li><i className="fas fa-star fa-sm text-warning"></i></li>
                                    <li><i className="fas fa-star-half-alt fa-sm text-warning"></i></li>
                                </ul>
                            </div>
                        </Col>

                        <Col md={4} className="mb-4">
                            <div className="card">
                                <div className="d-flex justify-content-center mb-4">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" className="rounded-circle shadow-1-strong" width="150" height="150" alt="Lisa Cudrow" />
                                </div>
                                <h5 className="mb-3">Lisa Cudrow</h5>
                                <h6 className="text-primary mb-3">Graphic Designer</h6>
                                <p className="px-xl-3">
                                    <i className="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
                                </p>
                                <ul className="list-unstyled d-flex justify-content-center mb-0">
                                    <li><i className="fas fa-star fa-sm text-warning"></i></li>
                                    <li><i className="fas fa-star fa-sm text-warning"></i></li>
                                    <li><i className="fas fa-star fa-sm text-warning"></i></li>
                                    <li><i className="fas fa-star fa-sm text-warning"></i></li>
                                    <li><i className="fas fa-star fa-sm text-warning"></i></li>
                                </ul>
                            </div>
                        </Col>

                        <Col md={4} className="mb-4">
                            <div className="card">
                                <div className="d-flex justify-content-center mb-4">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" className="rounded-circle shadow-1-strong" width="150" height="150" alt="John Smith" />
                                </div>
                                <h5 className="mb-3">John Smith</h5>
                                <h6 className="text-primary mb-3">Marketing Specialist</h6>
                                <p className="px-xl-3">
                                    <i className="fas fa-quote-left pe-2"></i>At vero es et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
                                </p>
                                <ul className="list-unstyled d-flex justify-content-center mb-0">
                                    <li><i className="fas fa-star fa-sm text-warning"></i></li>
                                    <li><i className="fas fa-star fa-sm text-warning"></i></li>
                                    <li><i className="fas fa-star fa-sm text-warning"></i></li>
                                    <li><i className="fas fa-star fa-sm text-warning"></i></li>
                                    <li><i className="far fa-star fa-sm text-warning"></i></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default About;
