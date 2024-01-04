import React from 'react';
import c from './Review.module.scss'
import quotes from 'assets/images/home/quotes.png'

interface IReviewProps {
    review: string
    author: string
    avatar: string
}

function Review({ review, author, avatar }: IReviewProps) {
    return (
        <div className={c.block}>
            <div className={c.quotes}>
                <img className={c.img} src={quotes} alt="qutoes"/>
            </div>
            <div className={c.avatar}>
                <img className={c['avatar-img']} src={avatar} alt="avatar"/>
            </div>
            <p className={c.review}>{review}</p>
            <p className={c.author}>{author}</p>
        </div>
    );
}

export default Review;