import React from 'react';
import { Link } from 'react-router-dom';


const SocietyCard = ({ image, societyName, tagline }) => {
    return (
        <div className="col">
            <div className="card" style={{ height: '400px' }}>
                {/* Image Section */}
                <div
                    className="card-img-top"
                    style={{
                        height: '40%',
                        borderBottom: '1px solid #1D1B5D',
                    }}
                   
                >

                <img 
                style={{height: '80%', width: '50%', display: 'block', margin: 'auto', marginTop: '20px', objectFit:"cover"}}
                src={image}/>
                </div>

                {/* Content Section */}
                <div className="card-body d-flex flex-column justify-content-between align-items-center" style={{ height: '60%' }}>
                    <h5 className="card-title">{societyName}</h5>
                    <p className="card-text">{tagline}</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-primary topsocietyBtn"
                            style={{ width: "130px", height: '40px', backgroundColor: "#1D1B5D", borderColor: "#1D1B5D" }}   
                        >
                             <Link to="/onesociety">View Profile</Link>
                            </button>

                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#" className="text-decoration-none me-3">
                            <i className="fab fa-facebook fa-lg" style={{color: "#1D1B5D"}}></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                            <i className="fab fa-twitter fa-lg" style={{color: "#1D1B5D"}}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocietyCard;

