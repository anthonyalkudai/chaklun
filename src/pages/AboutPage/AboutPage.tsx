import React from 'react';
import c from './AboutPage.module.scss'
import AboutSection from "../../components/AboutSection/AboutSection";

function AboutPage() {
    return (
        <div className={c.blokc}>
            <AboutSection />
        </div>
    );
}

export default AboutPage;