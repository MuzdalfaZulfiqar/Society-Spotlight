
// components/Home.js
import React from 'react';
import mission from '../Images/mission.png';
import tec from '../Images/tec.png';
import compete from '../Images/compete.png';
import codecon from '../Images/codecon.png';
import { Container, Row, Col } from 'react-bootstrap';
import SocietyCard from './SociteyCard';
import GDG from '../Images/GDG.png';
import IEEE from '../Images/IEEE.png';
import ILC from '../Images/ILC.png';
import team from "../Images/team-removebg-preview.png"
import gallery from '../Images/gallery.jpg';

const Society = () => {

    let source = [tec, compete, codecon]
    let start = 0;

    return (
        <div>
            {/* Section 2: Hero */}
            <section className="text-center text-white py-5" style={{ backgroundColor: '#1D1B5D' }}>
                <img src={GDG} alt="tec" />
                <div className="container">
                    <h1>Google Developers Groups</h1>
                    <p>Connect, learn, Grow!</p>
                </div>
            </section>

            <section className="py-5">
  <div className="container">
    <div className="row align-items-center">
    <h2>Who we are?</h2>
        <p style={{width: '100%'}}>
          Welcome to GDGoC (Google Developer Group on Campus), where we are excited to present our community's new identity! Our vision, future goals, and how we aim to empower students to thrive in technology and beyond.
        </p>
    </div>
    <div className="row align-items-center">
      {/* Text Content */}
      <div className="col-md-6">
        

        {/* Cards Row */}
        <div className="row">
          {/* Card 1 (Existing Card) */}
          <div className="col-md-6">
  <section className="mx-auto my-5" style={{ maxWidth: '23rem' }}>
    <div className="card">
      <div className="card-body">
        <blockquote className="blockquote blockquote-custom bg-white px-3 pt-4">
          <div className="blockquote-custom-icon bg-success shadow-1-strong">
            <i className="fa fa-handshake text-white"></i>
          </div>
          <p className="mb-0 mt-2 font-italic">
            "At GDGoC, our strength lies in building a supportive community that collaborates, grows, and thrives together."
          </p>
          <footer className="blockquote-footer pt-4 mt-4 border-top">
            GDGoC Community <cite title="Source Title">Core Values</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</div>


          {/* Card 2 (New Card) */}
          <div className="col-md-6">
            <section className="mx-auto my-5" style={{ maxWidth: '23rem' }}>
              <div className="card">
                <div className="card-body">
                  <blockquote className="blockquote blockquote-custom bg-white px-3 pt-4">
                    <div className="blockquote-custom-icon bg-primary shadow-1-strong">
                      <i className="fa fa-lightbulb text-white"></i>
                    </div>
                    <p className="mb-0 mt-2 font-italic">
                      "At GDGoC, we believe in fostering creativity and collaboration, paving the way for groundbreaking ideas."
                    </p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">
                      GDGoC Team <cite title="Source Title">Vision Statement</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="col-md-6">
        <video
          src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  </div>
</section>



            {/* Section 3: Team */}
            <section className="team-section py-5 text-white" style={{ backgroundColor: '#1D1B5D' }}>

                <section class="py-3 py-md-5 py-xl-8">
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                <h2 class="mb-4 display-5 text-center">Our Team</h2>
                                <p class="text-secondary mb-5 text-center lead fs-4">We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us.</p>
                                <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                            </div>
                        </div>
                    </div>

                    <div class="container overflow-hidden">
                        <div class="row gy-4 gy-lg-0 gx-xxl-5">
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                                    <div class="card-body p-0">
                                        <figure class="m-0 p-0">
                                            <img class="img-fluid" loading="lazy" src="https://bootstrapbrain.com/demo/components/teams/team-1/assets/img/team-img-5.jpg" alt="Flora Nyra" />
                                            <figcaption class="m-0 p-4">
                                                <h4 class="mb-1">Flora Nyra</h4>
                                                <p class="text-secondary mb-0">Product Manager</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                                    <div class="card-body p-0">
                                        <figure class="m-0 p-0">
                                            <img class="img-fluid" loading="lazy" src="https://bootstrapbrain.com/demo/components/teams/team-1/assets/img/team-img-4.jpg" alt="Evander Mac" />
                                            <figcaption class="m-0 p-4">
                                                <h4 class="mb-1">Evander Mac</h4>
                                                <p class="text-secondary mb-0">Art Director</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                                    <div class="card-body p-0">
                                        <figure class="m-0 p-0">
                                            <img class="img-fluid" loading="lazy" src="https://bootstrapbrain.com/demo/components/teams/team-1/assets/img/team-img-2.jpg" alt="Taytum Elia" />
                                            <figcaption class="m-0 p-4">
                                                <h4 class="mb-1">Taytum Elia</h4>
                                                <p class="text-secondary mb-0">Investment Planner</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                                    <div class="card-body p-0">
                                        <figure class="m-0 p-0">
                                            <img class="img-fluid" loading="lazy" src="https://bootstrapbrain.com/demo/components/teams/team-1/assets/img/team-img-1.jpg" alt="Wylder Elio" />
                                            <figcaption class="m-0 p-4">
                                                <h4 class="mb-1">Wylder Elio</h4>
                                                <p class="text-secondary mb-0">Financial Analyst</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>




            {/* Section 4: Events */}
            <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h2 className="text-center">Events</h2>
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
                            style={{ width: "200px", height: '50px', backgroundColor: "#1D1B5D", borderColor: "#1D1B5D" }}
                        >Explore All Events</button>
                    </div>
                </div>
            </section>


            {/* Section 5: Gallery */}
            <section className="py-5" style={{ backgroundColor: '#1D1B5D' }}>
                <div className="container">
                    <h2 className="text-center" style={{ color: 'white' }}>Gallery</h2>
                    <   div className="row mt-4">
                        <img src={gallery} />
                    </div>
                </div>
            </section>


            {/* Section 5: Gallery */}
            <section className="py-5" style={{ backgroundColor: 'white', color: "black" }}>
                <div className="container">

                    <section class="bg-light py-3 py-md-5">
                        <div class="container">
                            <div class="row justify-content-md-center">
                                <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                    <h2 class="mb-4 display-5 text-center">Contact</h2>
                                    <p class="text-secondary mb-5 text-center">The best way to contact us is to use our contact form below. Please fill out all of the required fields and we will get back to you as soon as possible.</p>
                                    <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <div class="row justify-content-lg-center">
                                <div class="col-12 col-lg-9">
                                    <div class="bg-white border rounded shadow-sm overflow-hidden">

                                        <form action="#!">
                                            <div class="row gy-4 gy-xl-5 p-4 p-xl-5">
                                                <div class="col-12">
                                                    <label for="fullname" class="form-label">Full Name <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" id="fullname" name="fullname" value="" required />
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                                                    <div class="input-group">
                                                        <span class="input-group-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                            </svg>
                                                        </span>
                                                        <input type="email" class="form-control" id="email" name="email" value="" required />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <label for="phone" class="form-label">Phone Number</label>
                                                    <div class="input-group">
                                                        <span class="input-group-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                            </svg>
                                                        </span>
                                                        <input type="tel" class="form-control" id="phone" name="phone" value="" />
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <label for="message" class="form-label">Message <span class="text-danger">*</span></label>
                                                    <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid justify-content-center">
                                                        <button class="btn btn-primary btn-lg " type="submit"
                                                            style={{ width: "200px", height: '50px', backgroundColor: "#1D1B5D", borderColor: "#1D1B5D" }}
                                                        >Submit</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </div>
    );
};

export default Society;

