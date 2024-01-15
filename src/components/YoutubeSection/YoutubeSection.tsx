import React from 'react';
import c from './YoutubeSection.module.scss'
import popupYoutube from 'assets/images/home/popup_youtube.jpg'
import Container from "../Container/Container";
import { ReactComponent as YoutubeIcon } from 'assets/icons/youtube21.svg'

function YoutubeSection() {
    return (
        <div className={c.block}>
            <div className={c.bg}>
                <img src={popupYoutube} alt="popupYoutube"/>
            </div>

            <div className={c.content}>
                <Container>
                    <div className={c['inner-content']}>

                        <div className={c.main}>
                            <div>
                                <h2 className={c.title}>Follow us on the YouTube channel</h2>
                                <h3 className={c['sub-title']}><span
                                    className={c.span}>"Chaklun" - Ukrainian</span> UAV</h3>
                            </div>
                            <p className={c.text}>Our project is already working. Our drones have successfully proven themselves in business and are already bringing our Victory closer today.</p>
                            <a href="https://2no.co/FKasfm6hUnk"><button className={c.btn}>
                                <figure className={c.icon}><YoutubeIcon/></figure>
                                <span>YouTube</span>
                            </button></a>
                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
}

export default YoutubeSection;
