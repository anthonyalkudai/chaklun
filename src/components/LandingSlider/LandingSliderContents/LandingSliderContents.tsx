import React from "react";
import c from './LandingSliderContents.module.scss'

export const content1 = (
    <div className={c.content}>
        <h2 className={c['h2']}>Your donations help bring victory closer!</h2>
        <div>
            <p className={c.text}>The Charitable Foundation "True Direction" is collecting funds for the production of the "CHAKLUN" UAV.</p>
            <p className={c.text}>In this war, charity is a heavy weapon that works for us.</p>
        </div>
        <h1 className={c.title}>Contribute to OUR VICTORY!</h1>
        <button tabIndex={-1} className={c.btn}>Bank from monobank</button>
    </div>
)

export const content2 = (
    <div className={c.content}>
        <h1 className={c.title}>CHAKLUN UAV</h1>
        <ul className={c.list}>
            <li>invisible to the enemy</li>
            <li>performs in-depth reconnaissance</li>
            <li>brings valuable information</li>
            <li>suitable for adjusting the work of artillery</li>
            <li>able to work autonomously</li>
            <li>made in Ukraine</li>
        </ul>
    </div>
)

export const content3 = (
    <div className={c.content}>
        <h1 className={c.title}>CHAKLUN UAV</h1>
        <h3 className={c['sub-title']}>reconnaissance drone <br/>aviation complex</h3>
        <h3 className={c['sub-title']}>OF UKRAINIAN PRODUCTION</h3>
    </div>
)

export const contents = [
    content1,
    content2,
    content3
]
