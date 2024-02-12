import React  from "react";
import {
    BrowserRouter as Router,
    Link,
    useNavigate
  } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{fontFamily: '"Itim", cursive'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand " style={{fontFamily: '"Itim", cursive'}} to="/"><i className="fa-solid fa-rocket"></i> Space Exploration</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"  id="navbarNav">
                        <ul className="navbar-nav" style={{marginLeft:'auto'}}>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;