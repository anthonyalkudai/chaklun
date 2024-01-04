import React from 'react';
import c from './Blog.module.scss'
import {IBlog} from "../../types/types";
import {Link} from "react-router-dom";
import Slider, {Settings} from "react-slick";
import { ReactComponent as Arrow } from 'assets/icons/arrow-right.svg'

interface IBlogProps {
    blog: IBlog
}

function Blog({ blog }: IBlogProps) {

    const sliderSettings: Settings = {
        nextArrow: (
            <div>
                <figure className={c.next}>
                    <Arrow/>
                </figure>
            </div>
        ),
        prevArrow: (
            <div>
                <figure className={c.prev}>
                    <Arrow style={{transform: 'rotate(180deg)'}}/>
                </figure>
            </div>
        ),
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
    }

    return (
        <div className={c.block}>
            <div className={c['preview-wrapper']}>
                {Array.isArray(blog.preview) ? (
                    <Slider
                        {...sliderSettings}
                    >
                        {blog.preview.map((preview) => (
                            <img src={preview} alt="preview"/>
                        ))}
                    </Slider>
                ) : (
                    <img className={c.preview} src={blog.preview} alt="preview"/>
                )}
            </div>
            <h2 className={c.title}>
                <Link to={'/'}>{blog.title}</Link>
            </h2>
            <div className={c.info}>
                <span className={c['info-item']}>{blog.author}</span>
                <span className={`${c['info-item']} ${c.separator}`}>/</span>
                <span className={`${c['info-item']} ${c.category}`}>
                    <Link to={'/'}>{blog.category}</Link>
                </span>
                <span className={`${c['info-item']} ${c.separator}`}>/</span>
                <span className={c['info-item']}>{blog.date}</span>
            </div>
            <p className={c.body}>{blog.body}</p>
            {(blog.additionalBody && blog.additionalBody.length > 0) && (
                <Link to={'/'} className={c['read-more']}>Читати далі...</Link>
            )}
        </div>
    );
}

export default Blog;