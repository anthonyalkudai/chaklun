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
                            <SectionTitle className={c.title} text={'Хочеш щоб наші ЗСУ "бачили краще»?'} />
                            <p className={c.text}>Благодійний фонд "Вірний напрямок" збирає кошти на виготовлення БпЛА "Чаклун" для ЗСУ.</p>
                            <div className={c['btn-block']}>
                                <button className={c.btn}>Долучайтесь! МОНОБАНКА </button>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
}

export default DonateSection;