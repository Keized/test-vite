import React, { useState, useEffect } from "react";

function Navbar() {
    
    const [scroll, setScroll] = useState([]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                setScroll('navbarDark');
            } else {
                setScroll('');
            }
        });
    }, [])

    return (
        <nav className={`navbar-dark navbar navbar-expand-lg fixed-top navbarScroll ${scroll}`}>
            <div className="container">
                <a className="navbar-brand" href="#">Name</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">A propos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Compétences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar