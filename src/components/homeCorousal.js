import React from "react";

function homeCorousal() {

    return (
        <>
            <div className="carousal-container">
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/AS11-40-5964_%2821037459754%29.jpg/1024px-AS11-40-5964_%2821037459754%29.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>On Surface of Moon</h5>
                                <p>Buzz Aldrin taking a core sample of the Moon during the Apollo 11 mission</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/PIA16239_High-Resolution_Self-Portrait_by_Curiosity_Rover_Arm_Camera_square.jpg/1024px-PIA16239_High-Resolution_Self-Portrait_by_Curiosity_Rover_Arm_Camera_square.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>On Surface of Mars</h5>
                                <p>Self-portrait of Curiosity rover on Mars's surface.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/TIROS-1-Earth.png" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Image of Earth</h5>
                                <p>First television image of Earth from space, taken by TIROS-1 (1960)</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Spirit_rover_tracks.jpg/1024px-Spirit_rover_tracks.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Surface of Mars</h5>
                                <p>Surface of Mars by the Spirit rover (2004)</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Hubble_ultra_deep_field_high_rez_edit1.jpg/1024px-Hubble_ultra_deep_field_high_rez_edit1.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Various Galaxies</h5>
                                <p>
                                    This high-resolution image of the Hubble Ultra Deep Field includes galaxies of various ages, sizes, shapes, and colors. The smallest, reddest galaxies, are some of the most distant galaxies to have been imaged by an optical telescope.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>

    )
}

export default homeCorousal;