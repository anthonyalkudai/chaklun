import React, {Children, useRef} from 'react';
import c from './AdvantagesSection.module.scss'
import Container from "../Container/Container";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './advantage.slick.scss'
import advantages from "./advantages/advantages";
import arrow from 'assets/icons/arrow24.png'

function AdvantagesSection() {
    const sliderRef = useRef<Slider>(null)
    const currentSlideIdx = useRef<number>(0);

    const sliderSettings: Settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: (
            <div className={'slick-prev'}>
                <div className={c.prev}>
                    <img src={arrow} alt="arrow"/>
                </div>
            </div>
        ),
        nextArrow: (
            <div className={'slick-next'}>
                <div className={c.next}>
                    <img src={arrow} alt="arrow" style={{transform: 'rotate(180deg)'}}/>
                </div>
            </div>
        ),
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        className: c.slider,
        touchMove: true,
        afterChange: (currentSlide: number) => currentSlideIdx.current = currentSlide,
        appendDots: (dots) => {
            const dotsLength = Children.toArray(dots).length
            const dotsCount = Math.ceil(dotsLength / 3)
            const dotsArr = Array.from({ length: dotsCount }, (_, idx) => idx)

            const onDotClick = (dotNumber: number) => {
                if (sliderRef.current) {

                    let slideNum = (dotNumber * dotsCount)
                    if (slideNum !== 0) {
                        //idx
                        slideNum = slideNum - 1
                    }


                    if (slideNum > dotsLength - 1) {
                        // idx
                        slideNum = dotsLength - 1
                    }

                    if (slideNum === currentSlideIdx.current) {
                        return;
                    }

                    currentSlideIdx.current = slideNum;
                    sliderRef.current.slickGoTo(slideNum)
                }
            }

            const currentDot = Math.ceil(currentSlideIdx.current / dotsCount)
            return (
                <ul className={'slick-dots'}>
                    {dotsArr.map((num) => (
                        <li key={num} className={num === currentDot ? 'dot-active dot' :'dot'} onClick={() => onDotClick(num)}></li>
                    ))}
                </ul>
            )
        }
    }

    return (
        <div className={c.block}>
            <Container>
                <div className={c['inner-block']}>

                    <SectionTitle text={'ADVANTAGES of the "Chaklun" UAV'} />
                    <p className={c.text}>Today there is an acute need for small scouts. Quadcopters, with which they try to close certain issues, do not cope with reconnaissance tasks, given the small range and duration of the flight, which can be provided by an unmanned aircraft. Using the Chaklun UAV, our military drew attention to certain advantages of this drone:</p>

                    <div className={c.content}>
                        <Slider
                            ref={sliderRef}
                            {...sliderSettings}
                        >
                            {advantages.map((advantage, idx) => (
                                <div key={idx}>
                                    {advantage}
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default AdvantagesSection;