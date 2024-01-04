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
                    <SectionTitle text={'УКРАЇНСЬКІ "ОЧІ ЗСУ" - цє безпілотник "Чаклун"'} />

                    <div className={c.content}>
                        <div className={c.main}>
                            <p className={c.text}>Сьогоднішня війна - це війна безпілотників. Вони стали потрібним, але нажаль,  розхідним матеріалом, незважаючи на їх високу вартість. Потреба в безпілотниках зростає з кожним днем, адже на сьогодні це дійсно - "Очі ЗСУ", що допомагають оперативно отримувати розвіддані та коригувати дії. Бійці з різних підрозділів ЗСУ вже активно використовують БпЛА "Чаклун"</p>

                            <ul className={c.list}>
                                <li className={c.item}>
                                    <DroneDetailsItem title={'Порівняльні переваги'}>
                                        <div><strong>Невелика вартість</strong> комплексу,
                                            оснащеного двома безпілотниками, порівняно з іншими комплексами цього ж
                                            класу, яка може варіюватися в залежності від вартості заявленого корисного
                                            навантаження.
                                        </div>
                                    </DroneDetailsItem>
                                </li>
                                <li className={c.item}>
                                    <DroneDetailsItem title={'Виробничі процеси'}>
                                        <div className="sppb-addon-text"><strong>Власне виробництво як корпусів, так і
                                            багатьох елементів комплексу</strong> дозволяє проводити оперативний
                                            капітальний ремонт <em>(заміна окремих елементів конструкції або перенесення
                                                вцілілого оснащення в новий корпус безпілотника).</em></div>
                                    </DroneDetailsItem>
                                </li>
                                <li className={c.item}>
                                    <DroneDetailsItem title={'Зносостійкість'}>
                                        <div className="sppb-addon-text">Матеріал планера є міцним і водночас достатньо
                                            еластичним. Це робить його ремонтопридатним у польових умовах.
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