import React from 'react';
import c from './ChaklunSection.module.scss'
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import rockets from 'assets/images/home/rockets.jpg'
import Container from "../Container/Container";

function ChaklunSection() {
    return (
        <div className={c.block}>
            <Container>
                <div className={c['inner-block']}>
                    <div className={c.title}>
                        <SectionTitle text={'Warehouse of the "Chaklun"'}/>
                    </div>

                    <div className={c.content}>
                        <div className={c.main}>
                            <p className={c.text}>The ready-made "Chaklun" UAV complex is delivered in the form of two completely assembled and configured gliders, equipped with complete sets of necessary electronics, a laptop with installed software and a set of necessary accessories.</p>

                            <ol className={c.list}>
                                <li><strong>Glider:</strong> configured and completely ready for use - 2 pcs.
                                </li>
                                <li><strong>Battery:</strong> - 4 pcs.</li>
                                <li><strong>Video and photo shooting device:</strong> "GoPro Hero"– 2 pcs. (or other equipment weighing up to 200 g)
                                </li>
                                <li><strong>Spare propeller</strong> - 2 pcs.</li>
                                <li><strong>Battery charging device</strong> portable (12-220V) – 1 pc.</li>
                                <li><strong>Laptop</strong> with installed software - 1 pc.</li>
                                <li><strong>Repair kit</strong> minimum field - 1 pc.</li>
                                <li><strong>Transmitter</strong> (remote control panel) – 1 pc.</li>
                            </ol>
                        </div>
                        <div className={c.image}>
                            <img src={rockets} alt="rockets"/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ChaklunSection;