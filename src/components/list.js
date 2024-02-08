import React from "react";
import { Link } from "react-router-dom";

function list() {
    return (
        <>
            <div className="list-container">
                <div class="card" style={{ width: "18rem",marginBottom:"30px" }}>
                    <img
                        src="https://news.uchicago.edu/sites/default/files/images/2022-10/sgr%20A%2A%20ESO%20and%20M.%20Kornmesser%20690.jpg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Black Holes</h5>
                        <p class="card-text">
                            A black hole is a region of spacetime where gravity is so strong
                            that nothing, including light and other electromagnetic waves, has
                            enough energy to escape it..
                        </p>
                        <Link to="/black-holes" class="btn btn-primary">
                            Explore
                        </Link>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem",marginBottom:"30px" }}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/79/243_Ida_-_August_1993_%2816366655925%29.jpg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Asteroids</h5>
                        <p class="card-text">
                            An asteroid is a minor planet—an object that is neither a true
                            planet nor a comet—that orbits within the inner Solar System.
                        </p>
                        <Link to="#" class="btn btn-primary">
                            Explore
                        </Link>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem",marginBottom:"30px" }}>
                    <img
                        src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2011/09/alexander_gerst_in_spacewalk_training7/9757590-3-eng-GB/Alexander_Gerst_in_spacewalk_training_article.jpg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Living in Space</h5>
                        <p class="card-text">
                            An asteroid is a minor planet—an object that is neither a true
                            planet nor a comet—that orbits within the inner Solar System.
                        </p>
                        <Link to="#" class="btn btn-primary">
                            Explore
                        </Link>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem",marginBottom:"30px" }}>
                    <img
                        src="https://img.etimg.com/thumb/width-640,height-480,imgsize-299673,resizemode-75,msid-58496741/news/science/solar-system-2-0-found-10-light-years-away.jpg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Solar System Planets</h5>
                        <p class="card-text">
                        The Solar System is the gravitationally bound system of the Sun and the objects that orbit it.
                        </p>
                        <Link to="/planets" class="btn btn-primary">
                            Explore
                        </Link>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem",marginBottom:"30px" }}>
                    <img
                        src="https://www.nasa.gov/wp-content/uploads/2023/06/295224main-jsc2008e139397.jpg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Space Exploration Vehicle</h5>
                        <p class="card-text">
                        The Solar System is the gravitationally bound system of the Sun and the objects that orbit it.
                        </p>
                        <Link to="/planets" class="btn btn-primary">
                            Explore
                        </Link>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem",marginBottom:"30px" }}>
                    <img
                        src="https://img.etimg.com/thumb/width-640,height-480,imgsize-299673,resizemode-75,msid-58496741/news/science/solar-system-2-0-found-10-light-years-away.jpg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Solar System Planets</h5>
                        <p class="card-text">
                        The Solar System is the gravitationally bound system of the Sun and the objects that orbit it.
                        </p>
                        <Link to="/planets" class="btn btn-primary">
                            Explore
                        </Link>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem",marginBottom:"30px" }}>
                    <img
                        src="https://img.etimg.com/thumb/width-640,height-480,imgsize-299673,resizemode-75,msid-58496741/news/science/solar-system-2-0-found-10-light-years-away.jpg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Solar System Planets</h5>
                        <p class="card-text">
                        The Solar System is the gravitationally bound system of the Sun and the objects that orbit it.
                        </p>
                        <Link to="/planets" class="btn btn-primary">
                            Explore
                        </Link>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem",marginBottom:"30px" }}>
                    <img
                        src="https://img.etimg.com/thumb/width-640,height-480,imgsize-299673,resizemode-75,msid-58496741/news/science/solar-system-2-0-found-10-light-years-away.jpg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Solar System Planets</h5>
                        <p class="card-text">
                        The Solar System is the gravitationally bound system of the Sun and the objects that orbit it.
                        </p>
                        <Link to="/planets" class="btn btn-primary">
                            Explore
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default list;
