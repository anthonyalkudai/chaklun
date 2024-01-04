import React from "react";
import c from './LandingSliderContents.module.scss'

export const content1 = (
    <div className={c.content}>
        <h2 className={c['h2']}>Ваші донати допомагають наблизити перемогу!</h2>
        <div>
            <p className={c.text}>Благодійний фонд «Вірний напрямок» збирає кошти на виготовлення БпЛА «ЧАКЛУН».</p>
            <p className={c.text}>В цій війні благодійність – важка зброя, яка працює на нас.</p>
        </div>
        <h1 className={c.title}>Зробіть свій внесок в НАШУ ПЕРЕМОГУ!</h1>
        <button tabIndex={-1} className={c.btn}>Банка від monobank</button>
    </div>
)

export const content2 = (
    <div className={c.content}>
        <h1 className={c.title}>БПЛА "ЧАКЛУН"</h1>
        <ul className={c.list}>
            <li>непомітний для ворога</li>
            <li>виконує глибинну розвідку</li>
            <li>приносить цінну інформацію</li>
            <li>придатний для корегування роботи артилерії</li>
            <li>здатен працювати автономно</li>
            <li>виготовлений в Україні</li>
        </ul>
    </div>
)

export const content3 = (
    <div className={c.content}>
        <h1 className={c.title}>БПЛА "ЧАКЛУН"</h1>
        <h3 className={c['sub-title']}>розвідувальний безпілотний <br/> авіаційний комплекс</h3>
        <h3 className={c['sub-title']}>УКРАЇНСЬКОГО ВИРОБНИЦТВА</h3>
    </div>
)

export const contents = [
    content1,
    content2,
    content3
]
