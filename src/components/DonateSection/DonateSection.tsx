import React from 'react';
import c from './DonateSection.module.scss'
import donate from 'assets/images/home/donate-section.jpg'
import Container from "../Container/Container";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";

function DonateSection() {
    return (
        <div className={c.block}>
            <div className={c.bg}>
                <div className={c.transparent}></div>
                <img src={donate} alt="donate"/>
            </div>

            <div className={c.content}>
                <Container>
                    <div className={c['inner-content']}>

                        <div>
                            <SectionTitle className={c.title} text={'Do you want our Armed Forces to "know more that our enemy"?'} />
                            <p className={c.text}>The "True Direction" charity fund is collecting funds for the production of the "Chaklun" UAV for the Armed Forces.</p>
                            <div className={c['btn-block']}>
                                <button className={c.btn}>Join in! MONOBANK </button>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
}

export default DonateSection;