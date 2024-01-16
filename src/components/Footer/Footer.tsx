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
                            <h3 className={c.title}>About us</h3>
                            <p className={c.text}>The goal of our project "We are the eyes of the Armed Forces" is to produce, using the collected charity funds, the Ukrainian complexes of the Ukrainian Air Force "CHAKLKUN" and hand them over to the defenders of Ukraine. And not only the transfer, but also a completely free training course for managing such BpAK.</p>
                        </div>
                        <div className={c.section}>
                            <h3 className={c.title}>Join us</h3>
                            <ul className={c.list}>
                                <li><Link className={c.link} to={'/'}>LinkedIn</Link></li>
                                <li><Link className={c.link} to={'/'}>Telegram</Link></li>
                                <li><Link className={c.link} to={'/'}>Facebook</Link></li>
                                <li><Link className={c.link} to={'/'}>YouTube</Link></li>
                            </ul>
                        </div>
                        <div className={c.section}>
                            <h3 className={c.title}>Resource</h3>
                            <ul className={c.list}>
                                <li><Link className={c.link} to={'/'}>Documentation</Link></li>
                                <li><Link className={c.link} to={'/'}>Video</Link></li>
                                <li><Link className={c.link} to={'/'}>Support</Link></li>
                            </ul>
                        </div>
                        <div className={c.section}>
                            <h3 className={c.title}>Newsletter</h3>
                            <div className={c.content}>
                                <p className={c.text}>Subscribe to the newsletter to receive the latest news by email.</p>
                                <form className={c.form}>
                                    <div className={c['inner-form']}>
                                        <input className={c.input} placeholder={'Email'} type="text"/>
                                        <button className={c.btn}>Sign up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={c.lower}>
                        <p>&copy; 2023 "Chaclun" UAV - Ukrainian drone</p><img src='https://2no.co/1lrHz.png'></img>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default Footer;