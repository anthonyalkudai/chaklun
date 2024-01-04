import React from 'react';
import c from './TopHeader.module.scss'
import Container from "../Container/Container";
import { ReactComponent as Facebook } from "assets/icons/facebook21.svg";
import { ReactComponent as YouTube } from "assets/icons/youtube21.svg";
import { ReactComponent as LinkedIn } from "assets/icons/linkedin21.svg";
import { ReactComponent as Clock } from "assets/icons/clock16.svg";

function TopHeader() {
    return (
        <div className={c.block}>
            <Container>
                <div className={c['inner-block']}>
                    <div className={c.left}>
                        <figure className={c.icon}><Clock/></figure>
                        <p className={c.text}>Неділя - Вихідний</p>
                    </div>
                    <div>
                        <div className={c.icons}>
                            <figure className={c.icon}><Facebook/></figure>
                            <figure className={c.icon}><YouTube/></figure>
                            <figure className={c.icon}><LinkedIn/></figure>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default TopHeader;