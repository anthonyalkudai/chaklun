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
                        <SectionTitle text={'Склад комплексу "Чаклун"'}/>
                    </div>

                    <div className={c.content}>
                        <div className={c.main}>
                            <p className={c.text}>Готовий комплекс БПАК "Чаклун" передається у вигляді повністю двох зібраних та налаштованих планерів, оснащених повними комплектами необхідної електроніки, ноутбуком зі встановленим програмним забезпеченням та комплектом необхідних аксесуарів.</p>

                            <ol className={c.list}>
                                <li><strong>Планер:</strong> налаштований та повністю готовий до застосування - 2
                                    шт.
                                </li>
                                <li><strong>Акумулятор:</strong> - 4 шт.</li>
                                <li><strong>Пристрій відео-фотозйомки:</strong> "GoPro Hero"– 2 шт. (або інше
                                    обладнання вагою до 200 г)
                                </li>
                                <li><strong>Запасний пропелер</strong> - 2 шт.</li>
                                <li><strong>Пристрій заряду батареї</strong> портативний (12-220V) – 1 шт.</li>
                                <li><strong>Ноутбук</strong> з встановленим програмним забезпеченням - 1 шт.</li>
                                <li><strong>Ремкомплект</strong> мінімальний польовий – 1 шт.</li>
                                <li><strong>Передавач</strong> (дистанційний пульт керування) – 1шт.</li>
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