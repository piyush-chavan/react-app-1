import React from "react";
import { useNavigate } from "react-router-dom";

export function Blackholes() {
    const navigate = useNavigate();
    return (
        <>  <button className="btn btn-success" onClick={()=>navigate("/")} style={{float:'left',margin:'6px'}}><i class="fa-solid fa-house"></i> Home</button>
            <h1>Black Holes</h1>
            <div class="card" style={{width:"18rem"}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Black_hole_lensing_web.gif" class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">Animated simulation of a Schwarzschild black hole with a galaxy passing behind. Around the time of alignment, extreme gravitational lensing of the galaxy is observed.</p>
                </div>
            </div>
            

        </>
    )
}

export default Blackholes;