import React from 'react';
import c from './BurgerBtn.module.scss'

interface IBurgerBtnProps {
    onClick?: () => void
    mode?: 'close' | 'open'
}

function BurgerBtn({ onClick, mode }: IBurgerBtnProps) {
    mode = mode ?? 'open'

    return (
        <button className={mode === 'close' ? c.close : `${c.open}`} onClick={onClick}>
            <div className={`${c.line} ${c.line1}`} />
            <div className={`${c.line} ${c.line2}`} />
            <div className={`${c.line} ${c.line3}`} />
        </button>
    );
}

export default BurgerBtn;