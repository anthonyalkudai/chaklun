import React from 'react';
import c from './DroneSection.module.scss'
import Container from "../Container/Container";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import DroneDetailsItem from "../DroneDetailsItem/DroneDetailsItem";
import handLaunch from 'assets/images/home/hand_launch.png'

function DroneSection() {
    return (
        <div className={c.block}>
            <Container>
                <div className={c['inner-block']}>
                    <SectionTitle text={'UKRAINIAN "EYES OF THE ARMY" - this is the "Chaklun" UAV'} />

                    <div className={c.content}>
                        <div className={c.main}>
                            <p className={c.text}>Today's war is a drone war. They have become a necessary, but unfortunately, consumable, despite their high cost. The need for drones is growing every day, because today they really are the "Eyes of the Armed Forces" that help to quickly receive intelligence and adjust actions. Fighters from various units of the Armed Forces are already actively using the Chaklun UAV</p>

                            <ul className={c.list}>
                                <li className={c.item}>
                                    <DroneDetailsItem title={'Comparative advantages'}>
                                        <div><strong>Small cost</strong> of a complex equipped with two drones compared to other complexes of the same class, which may vary depending on the cost of the declared payload.
                                        </div>
                                    </DroneDetailsItem>
                                </li>
                                <li className={c.item}>
                                    <DroneDetailsItem title={'Production processes'}>
                                        <div className="sppb-addon-text"><strong>Own production of both cases and many elements of the complex</strong>allows for operational capital repairs<em>(replacement of individual structural elements or transfer of surviving equipment to a new drone body).</em></div>
                                    </DroneDetailsItem>
                                </li>
                                <li className={c.item}>
                                    <DroneDetailsItem title={'Зносостійкість'}>
                                        <div className="sppb-addon-text">The material of the glider is strong and at the same time sufficiently elastic. This makes it serviceable in the field.
                                        </div>
                                    </DroneDetailsItem>
                                </li>
                            </ul>
                        </div>

                        <div className={c.image}>
                            <div className={c['image-block']}>
                                <img src={handLaunch} alt="handLaunch"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default DroneSection;