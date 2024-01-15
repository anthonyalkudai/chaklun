import React from 'react';
import c from './AmountSection.module.scss'
import Container from "../Container/Container";

function AmountSection() {
    return (
        <div className={c.block}>
            <Container>
                <div className={c['inner-block']}>

                    <div className={c['item']}>
                        <h1 className={c.title}>210 +</h1>
                        <p>Trained pilots</p>
                    </div>
                    <div className={c['item']}>
                        <h1 className={c.title}>250+</h1>
                        <p>Working boards</p>
                    </div>
                    <div className={c['item']}>
                        <h1 className={c.title}>100 +</h1>
                        <p>Subdivisions have a complex</p>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default AmountSection;