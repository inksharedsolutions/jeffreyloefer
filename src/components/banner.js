import React from 'react';
import Slider from "react-slick";

import Bg1 from '../images/slider/warrior_5.jpg';
import Bg2 from '../images/slider/warrior.jpg';
import { Link } from 'gatsby';

const SlideBanner = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    
    return(
        <div className="banner-section">
            <Slider {...settings} >
                <img src={Bg1} alt="Banner1" />
                <img src={Bg2} alt="Banner1" />
            </Slider>
            <div className="banner-text">
                <div className="line"></div>
                <h2>The Last Crusader</h2>
                <p>For the Crusaders!</p>
                <Link to="/about-the-book">Read More {">"}</Link>
            </div>
        </div>
    )
}

export default SlideBanner;