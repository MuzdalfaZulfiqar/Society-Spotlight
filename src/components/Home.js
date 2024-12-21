
// components/Home.js
import React from 'react';
import mission from '../Images/mission.png';
import tec from '../Images/tec.png';
import compete from '../Images/compete.png';
import codecon from '../Images/codecon.png';
import SocietyCard from './SociteyCard';
import GDG from '../Images/GDG.png';
import IEEE from '../Images/IEEE.png';
import ILC from '../Images/ILC.png';
import img from "../Images/img.png"
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';



const Home = () => {

    let source = [tec, compete, codecon]
    let start = 0;


    return (
        <div>
  <Navbar />
            <section
                className="py-3"
                style={{ backgroundColor: '#1D1B5D', color: 'white', minHeight: '440px', maxHeight: '86vh' }}
            >
                <div className="container"
                
                >
                    <div className="row align-items-center justify-content-center m-0">
                        {/* Left Content */}
                        <div className="col-md-6">
                            <h1 style={{ fontWeight: 'bold' , fontSize:"62px"}}>Connect.</h1>
                            <h1 style={{ fontWeight: 'bold'  , fontSize:"62px"}}>Collaborate.</h1>
                            <h1 style={{ fontWeight: 'bold'  , fontSize:"62px"}}>Shine.</h1>
                            <button className="btn btn-primary"
                            style={{ width: "200px", height: '50px', backgroundColor: "white", borderColor: "#1D1B5D", color: "black" }}
                            
                        >
                            <Link to="/society">  Explore All Societies</Link>
                           </button>
                        </div>

                        {/* Right Image */}
                        <div className="col-md-6 text-center"
                        style={{
                            height: '100%',
                        }}
                        >
                            <img
                                src={img}
                                alt="Collaboration"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>




            {/* Section 3: Societies */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center">Top Societies</h2>

                    <div className="container my-5 col-md-10">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <SocietyCard
                                image={GDG}
                                societyName="GDG on campus CUI"
                                tagline="Connecting Innovators"
                            />
                            <SocietyCard
                                image={IEEE}
                                societyName="IEEE comsats"
                                tagline="Empowering Ideas"
                            />
                            <SocietyCard
                                image={ILC}
                                societyName="ILC COMSATS ISB"
                                tagline="Collaboration in Action"
                            />
                        </div>
                    </div>
                    <div className="text-center mt-3 topsocietyBtn">
                        <button className="btn btn-primary"
                            style={{ width: "200px", height: '50px', backgroundColor: "#1D1B5D", borderColor: "#1D1B5D", color:"white" }}
                        >
                          <Link to="/society">  Explore All Societies</Link>   
                            
                            </button>
                    </div>
                </div>
            </section>

            {/* Section 4: Events */}
            <section className="py-5" style={{
                backgroundColor: '#1D1B5D', color: 'white'
            }}>
                <div className="container">
                    <h2 className="text-center">Upcoming Events</h2>
                    <div className="row mt-4">
                        {["Compete 2023", "Codecon", "Techthon"].map((item) => (
                            <div className="col-md-4 text-center" key={item}>
                                <div className="rounded-circle bg-secondary mx-auto" style={{ width: '150px', height: '150px' }}>
                                    <img src={source[start++]} alt="Event" style={{ width: '150px', height: '150px' }} />

                                </div>
                                <h5 className="mt-3">{item}</h5>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-3">
                        <button className="btn btn-primary"
                            style={{ width: "200px", height: '50px', backgroundColor: "white", borderColor: "#1D1B5D", color: "black" }}
                        >Explore All Events</button>
                    </div>
                </div>
            </section>

            {/* Section 5: Mission */}
            <section className="py-5">
                <div className="container" style={{ backgroundColor: "" }}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2>Our Mission</h2>

                            <p>At Society Spotlight, our mission is to empower university societies by providing a collaborative platform to showcase their achievements, connect with students, and grow their networks. We aim to foster a culture of learning, innovation, and teamwork by bridging the gap between societies and students looking to explore their passions.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="" style={{ width: '100%', height: '100%' }}>
                                <img src={mission} alt="Mission" style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Home;

