import React from 'react';
import c from './ReviewSection.module.scss'
import Container from "../Container/Container";
import Slider from "react-slick";
import Review from "../Review/Review";
import avatar1 from 'assets/images/home/avatar1.jpg';
import avatar2 from 'assets/images/home/avatar2.jpg';


function ReviewSection() {
    const sliderSettings = {
        infinite: true,
        touchMove: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className={c.block}>
            <Container>
                <div className={c['inner-block']}>
                    <h2 className={c.title}>Feedback from our users</h2>
                    <p className={c.text}>Comments of representatives of aerial intelligence on the practical application of the Chaklun UAV</p>

                    <Slider
                        {...sliderSettings}
                    >
                        <Review
                            avatar={avatar1}
                            author={'Dnipropetrovsk air reconnaissance group'}
                            review={'"Our air reconnaissance unit has completed a training course on the use of the Chaklun UAV. For the most effective performance of the assigned tasks on the constant fronts of our Motherland, we desperately needed this bird. The reliable "EYES of the Armed Forces" is an opportunity: it will detect and exterminate the occupier in time, and protect as many of our defenders as possible."'}
                        />
                        <Review
                            avatar={avatar2}
                            author={'Andrey Sarvyra'}
                            review={'"Our air reconnaissance division has completed a training course on the use of the Chaklun UAV. For the most effective performance of the assigned tasks on the constant fronts of our Motherland, we desperately need this bird. The reliable "EYES of the Armed Forces" is an opportunity: it will detect and exterminate the occupier in time, and protect as many of our defenders as possible."'}
                        />
                    </Slider>
                </div>
            </Container>
        </div>
    );
}

export default ReviewSection;