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
                        <p>Навчених пілотів</p>
                    </div>
                    <div className={c['item']}>
                        <h1 className={c.title}>250+</h1>
                        <p>Працюючих бортів</p>
                    </div>
                    <div className={c['item']}>
                        <h1 className={c.title}>100 +</h1>
                        <p>Підрозділів мають комплекс</p>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default AmountSection;