import React, { useState } from 'react';
import GDG from '../Images/GDG.png';
import IEEE from '../Images/IEEE.png';
import ILC from '../Images/ILC.png';
import SocietyCard from './SociteyCard';
import Navbar from './Navbar';
import Footer from './Footer';

const AllSocieties = () => {

    // Dummy array to simulate data for societies
    const societies = [
        { image: GDG, societyName: "GDG on campus CUI", tagline: "Connecting Innovators" },
        { image: IEEE, societyName: "IEEE comsats", tagline: "Empowering Ideas" },
        { image: ILC, societyName: "ILC COMSATS ISB", tagline: "Collaboration in Action" },
        { image: GDG, societyName: "GDG Islamabad", tagline: "Innovating Together" },
        { image: IEEE, societyName: "IEEE CUI", tagline: "Ideas Empowered" },
        { image: ILC, societyName: "ILC CUI", tagline: "Leading Innovation" },
        { image: GDG, societyName: "GDG CUI", tagline: "Technology for All" },
        { image: IEEE, societyName: "IEEE Islamabad", tagline: "Future Technologies" },
        { image: ILC, societyName: "ILC Islamabad", tagline: "Empowering Growth" },
        { image: IEEE, societyName: "IEEE CUI", tagline: "Ideas Empowered" },
        { image: ILC, societyName: "ILC CUI", tagline: "Leading Innovation" },
        { image: GDG, societyName: "GDG CUI", tagline: "Technology for All" },
        { image: IEEE, societyName: "IEEE Islamabad", tagline: "Future Technologies" },
        { image: ILC, societyName: "ILC Islamabad", tagline: "Empowering Growth" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const societiesPerPage = 9;

    // Pagination logic
    const indexOfLastSociety = currentPage * societiesPerPage;
    const indexOfFirstSociety = indexOfLastSociety - societiesPerPage;
    const currentSocieties = societies.slice(indexOfFirstSociety, indexOfLastSociety);

    // Next page handler
    const nextPage = () => {
        if (currentPage < Math.ceil(societies.length / societiesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Previous page handler
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
              <Navbar/>
            <section
                className="py-3"
                style={{ backgroundColor: '#1D1B5D', color: 'white', minHeight: '440px', maxHeight: '86vh' }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center m-0">
                        {/* Left Content */}
                        <div className="col-md-6">
                            <h1 style={{ fontWeight: 'bold', fontSize: "62px" }}>Societies</h1>
                        </div>

                        {/* Right Image */}
                        <div className="col-md-6 text-center" style={{ height: '100%' }}>
                            <img
                                src={require("../Images/image.png")}
                                alt="Collaboration"
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
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
                            {currentSocieties.map((society, index) => (
                                <SocietyCard
                                    key={index}
                                    image={society.image}
                                    societyName={society.societyName}
                                    tagline={society.tagline}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Pagination Buttons */}
                    <div className="d-flex justify-content-between">
                        {/* Prev Button */}
                        <button
                            className="btn btn-primary"
                            style={{ backgroundColor: '#1D1B5D', color: 'white' }}
                            onClick={prevPage}
                            disabled={currentPage === 1}
                        >
                            <i className="fas fa-arrow-left"></i> Prev
                        </button>

                        {/* Next Button */}
                        <button
                            className="btn"
                            style={{ backgroundColor: '#1D1B5D', color: 'white' }}
                            onClick={nextPage}
                            disabled={currentPage === Math.ceil(societies.length / societiesPerPage)}
                        >
                            Next <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default AllSocieties;
