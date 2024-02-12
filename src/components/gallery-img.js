import React from "react";

function GalleryImg(props) {
    return (
        <>
            <div class="card gallery-img-box" style={{ width: '18rem' }}>
                <img src={props.src} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="back-blur">{props.title}</p>
                </div>
            </div>

        </>
    )
}
export default GalleryImg;