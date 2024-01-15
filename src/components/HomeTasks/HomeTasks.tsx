import React from 'react';
import c from './HomeTasks.module.scss'
import Container from "../Container/Container";
import HomeTasksItem from "../HomeTasksItem/HomeTasksItem";
import plane from 'assets/images/home/plane.png'
import SectionTitle from "../../UI/SectionTitle/SectionTitle";

function HomeTasks() {
    return (
        <section className={c.block}>
            <Container>
                <div className={c['inner-block']}>
                    <SectionTitle text={'The "CHAKLUN" complex performs all the necessary tasks:'} />

                    <ul className={c.list}>
                        <li className={c.item}>
                            <HomeTasksItem pictureSrc={plane}>
                                <p>The flight can be performed:<br/>- <strong>in automatic mode</strong> according to the given route.<br/>- <strong>in controlled mode</strong>, which allows the pilot to change the flight course if necessary</p>
                            </HomeTasksItem>
                        </li>
                        <li className={c.item}>
                            <HomeTasksItem>
                                <div>
                                    <p><strong>Photo/video recording of the area</strong>with coordinates recorded on onboard removable media.</p>
                                    <br/>
                                    <p>A Go-Pro camera and an online course camera are used.</p>
                                </div>
                            </HomeTasksItem>
                        </li>
                        <li className={c.item}>
                            <HomeTasksItem>
                                <div>
                                    <p>Return to the point of departure:</p>
                                    <br/>
                                    <p><strong>return home system</strong> when the signal is blocked - an inertial duplicated navigation system.</p>
                                    <br/>
                                </div>
                            </HomeTasksItem>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}

export default HomeTasks;