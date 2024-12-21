// components/Footer.js
import React from 'react';
// import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Integrate with backend API
    console.log('Newsletter submitted');
  };

  return (
    <footer className="text-white" style={{ backgroundColor: '#1D1B5D', padding: '40px 0' }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item me-3">
                <a href="/about" className="text-white text-decoration-none">About Us</a>
              </li>
              <li className="list-inline-item me-3">
                <a href="/contact" className="text-white text-decoration-none">Contact Us</a>
              </li>
              <li className="list-inline-item me-3">
                <a href="/explore" className="text-white text-decoration-none">Events</a>
              </li>
              <li className="list-inline-item">
                <a href="/society" className="text-white text-decoration-none">Societies</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-end">
            <a href="https://facebook.com" className="text-white me-3" aria-label="Facebook">
            <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-white me-3" aria-label="Twitter">
            <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-white me-3" aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://youtube.com" className="text-white" aria-label="YouTube">
            <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h5>Subscribe Newsletters</h5>
            <form onSubmit={handleNewsletterSubmit} className="d-flex justify-content-center">
              <div className="input-group" style={{ maxWidth: '500px' , display: 'flex' , gap: "10px"}}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  style={{marginTop :"9px"}}
                />
                <button className="btn btn-light" type="submit" style={{backgroundColor : "white",  width :"140px", height:'50px'}}>Subscribe Now</button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center mt-3">
          <small>&copy; 2024 Society Spotlight. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
