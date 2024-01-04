import React from 'react';
import c from './Footer.module.scss'
import Container from "../Container/Container";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className={c.block}>
            <Container>
                <div className={c['inner-block']}>

                    <div className={c.upper}>
                        <div className={c.section}>
                            <h3 className={c.title}>Про нас</h3>
                            <p className={c.text}>Метою нашого проєкту "Ми - Очі ЗСУ" є вироблення на зібрані благодійні
                                кошти українських комплексів БпАК ”ЧАКЛКУН”, та передача їх захисникам України. І не
                                тільки передача, а й абсолютно безкоштовний курс навчання керування таким БпАК.</p>
                        </div>
                        <div className={c.section}>
                            <h3 className={c.title}>Приєднуйся до нас</h3>
                            <ul className={c.list}>
                                <li><Link className={c.link} to={'/'}>LinkedIn</Link></li>
                                <li><Link className={c.link} to={'/'}>Telegram</Link></li>
                                <li><Link className={c.link} to={'/'}>Facebook</Link></li>
                                <li><Link className={c.link} to={'/'}>YouTube</Link></li>
                            </ul>
                        </div>
                        <div className={c.section}>
                            <h3 className={c.title}>Ресурси</h3>
                            <ul className={c.list}>
                                <li><Link className={c.link} to={'/'}>Документація</Link></li>
                                <li><Link className={c.link} to={'/'}>Відео</Link></li>
                                <li><Link className={c.link} to={'/'}>Підтримка</Link></li>
                            </ul>
                        </div>
                        <div className={c.section}>
                            <h3 className={c.title}>Розсилка новин</h3>
                            <div className={c.content}>
                                <p className={c.text}>Подпишитесь на рассылку, чтобы получать по электронной почте последние новости.</p>
                                <form className={c.form}>
                                    <div className={c['inner-form']}>
                                        <input className={c.input} placeholder={'Email'} type="text"/>
                                        <button className={c.btn}>Підписуйся</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={c.lower}>
                        <p>&copy; 2023 БпАК "Чаклун" - Український безпілотник</p>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default Footer;