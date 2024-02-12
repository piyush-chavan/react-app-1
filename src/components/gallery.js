import React from "react";
import "./gallery.css";
import GalleryImg from "./gallery-img";

function Gallery() {
    return (
        <>
            <h1 style={{ color: "rgb(44, 160, 206)", fontFamily: '"Itim", cursive' }}>Space Gallery</h1>
            <div className="gallery" >

                <GalleryImg title="Voyager 1" src="https://pop.h-cdn.co/assets/17/36/2048x2048/square-1504620396-voyager-spacecraft.jpg" />
                <GalleryImg title="Sputnik 1" src="https://upload.wikimedia.org/wikipedia/commons/b/b7/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9_%D0%B2_%D0%BC%D0%B8%D1%80%D0%B5_%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA_%D0%97%D0%B5%D0%BC%D0%BB%D0%B8.jpg" />
                <GalleryImg title="James Webb Space Telescope" src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQqCgFnFmlyzoYIHvuLiRRUK1YwYxhyhdFUFao1Xg1-Y1YZn0ekCTt62Q1uPYJMFUWt" />
                <GalleryImg title="Hubble Space Telescope" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HST-SM4.jpeg" />
                <GalleryImg title="Apollo 11" src="https://www.nasa.gov/wp-content/uploads/2019/07/edu_srch_celebrate_the_50th_anniversary_apollo11.jpg" />
                <GalleryImg title="Pioneer 10" src="https://upload.wikimedia.org/wikipedia/commons/f/f0/An_artist%27s_impression_of_a_Pioneer_spacecraft_on_its_way_to_interstellar_space.jpg" />
                <GalleryImg title="Apollo 13" src="https://cdn.britannica.com/12/132312-050-473056DC/Apollo-13-service-module-command-lunar-panel.jpg" />
                <GalleryImg title="Galileo" src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Artwork_Galileo-Io-Jupiter.JPG" />
                <GalleryImg title="Aditya L1 (ISRO)" src="https://www.isro.gov.in/media_isro/image/index/Aditya-L1/ANN_5723.webp" />
                <GalleryImg title="Chandrayan 1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PSLV-C11_launch2.jpg/330px-PSLV-C11_launch2.jpg" />
                <GalleryImg title="Chandrayan 3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/LVM3_M4%2C_Chandrayaan-3_-_Launch_vehicle_lifting_off_from_the_Second_Launch_Pad_%28SLP%29_of_SDSC-SHAR%2C_Sriharikota_03.webp/330px-LVM3_M4%2C_Chandrayaan-3_-_Launch_vehicle_lifting_off_from_the_Second_Launch_Pad_%28SLP%29_of_SDSC-SHAR%2C_Sriharikota_03.webp.png" />
                <GalleryImg title="Curiosity rover (on mars)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg/330px-Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg" />

            </div>

        </>
    );
}
export default Gallery;