import React from 'react';
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
    return (
        <div className='services'>
            <Carousel 
             infiniteLoop
             autoPlay
             showStatus = {false}
             showArrows = {false}
             interval={2500}
            //  showThumbs = {false}
            // showIndicators = {false}
            >
                <div>
                    <img src={img1} alt="Item1" />
                    <p className='legend'>Full Stack Development</p>
                </div>
                <div>
                    <img src={img2} alt="Item1" />
                    <p className="legend">MERN Stack Development</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Services