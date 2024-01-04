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
                                <h2 className={c.title}>Слідкуйте за нами на YouTube-каналі</h2>
                                <h3 className={c['sub-title']}><span
                                    className={c.span}>"БпАК "Чаклун" - Український</span> безпілотник"</h3>
                            </div>
                            <p className={c.text}>Наш проєкт вже працює. Наші безпілотники вдало зарекомендували себе у
                                справі та вже сьогодні наближають нашу Перемогу.</p>
                            <button className={c.btn}>
                                <figure className={c.icon}><YoutubeIcon/></figure>
                                <span>YouTube</span>
                            </button>
                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
}

export default YoutubeSection;
