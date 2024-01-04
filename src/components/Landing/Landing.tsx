import React from 'react';
import c from './Landing.module.scss'
import landingImg from 'assets/images/home/landing.jpg'
import LandingSlider from "components/LandingSlider/LandingSlider";
import Container from "components/Container/Container";


function Landing() {
    return (
        <div className={c.block}>
            <div className={c.bg}>
                <img src={landingImg} alt="landing"/>
            </div>

            <div className={c.content}>
                <Container>
                    <div className={c['inner-content']}>
                        <div className={c.slider}>
                            <LandingSlider/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Landing;