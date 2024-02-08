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
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"><i class="fa-solid fa-rocket"></i>Space</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/gallery">Gallery</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>

                        </ul>
                        <button onClick={()=>{navigate("/gallery")}}>Cilck to go gallery</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;