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
                    <SectionTitle text={'Комплекс "ЧАКЛУН" виконує усі необхідні завдання:'} />

                    <ul className={c.list}>
                        <li className={c.item}>
                            <HomeTasksItem pictureSrc={plane}>
                                <p>Політ може виконуватися:<br/>- <strong>в автоматичному режимі</strong> за завданим
                                    маршрутом.<br/>- <strong>в керованому режимі</strong>, що надає пілоту можливість за
                                    потреби змінювати курс польоту</p>
                            </HomeTasksItem>
                        </li>
                        <li className={c.item}>
                            <HomeTasksItem>
                                <div>
                                    <p><strong>Фото/відео фіксування місцевості</strong> з
                                    координатами із записом на бортовий зйомний носій.</p>
                                    <br/>
                                    <p>Застосовується камера
                                    Go-Pro та он-лайн курсова камера.</p>
                                </div>
                            </HomeTasksItem>
                        </li>
                        <li className={c.item}>
                            <HomeTasksItem>
                                <div>
                                    <p>Повернення на точку зльоту:</p>
                                    <br/>
                                    <p><strong>система
                                    повернення додому</strong> при блокуванні сигналу – інерційна дубльована система
                                    навігації.</p>
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