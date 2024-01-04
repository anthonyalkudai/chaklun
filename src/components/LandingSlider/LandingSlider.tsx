import React from 'react';
import c from './LandingSlider.module.scss'
import {contents} from "./LandingSliderContents/LandingSliderContents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function LandingSlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className={c.block}>
            <Slider
                className={c.slider}
                {...settings}
            >
                {contents.map((content) => (
                    <div key={content.key} className={c.content}>
                        {content}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default LandingSlider;