import React from 'react';
import c from './ReviewSection.module.scss'
import Container from "../Container/Container";
import Slider from "react-slick";
import Review from "../Review/Review";
import avatar1 from 'assets/images/home/avatar1.jpg'
import avatar2 from 'assets/images/home/avatar2.jpg'

function ReviewSection() {
    const sliderSettings = {
        infinite: true,
        touchMove: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className={c.block}>
            <Container>
                <div className={c['inner-block']}>
                    <h2 className={c.title}>Відгуки наших користувачів</h2>
                    <p className={c.text}>Коментарі представників аеророзвідки із практичного застосування БпЛА "Чаклун"</p>

                    <Slider
                        {...sliderSettings}
                    >
                        <Review
                            avatar={avatar1}
                            author={'Дніпропетровська група аеророзвідки'}
                            review={'"Наше подразделение аэроразведки завершило учебный курс по использованию БпЛА "Чаклун". Для максимально результативного выполнения поставленных задач на несмолкающих фронтах нашей Родины, нам крайне необходима была эта птица. Надежные "ОЧІ ЗСУ" – это возможность: вовремя выявить и истребить оккупанта, и уберечь как можно больше наших защитников и защитниц."'}
                        />
                        <Review
                            avatar={avatar2}
                            author={'Андрей Сарвира'}
                            review={'"Наше подразделение аэроразведки завершило учебный курс по использованию БпЛА "Чаклун". Для максимально результативного выполнения поставленных задач на несмолкающих фронтах нашей Родины, нам крайне необходима была эта птица. Надежные "ОЧІ ЗСУ" – это возможность: вовремя выявить и истребить оккупанта, и уберечь как можно больше наших защитников и защитниц."'}
                        />
                    </Slider>
                </div>
            </Container>
        </div>
    );
}

export default ReviewSection;