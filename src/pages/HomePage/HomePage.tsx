import React from 'react';
import c from './HomePage.module.scss'
import Landing from "components/Landing/Landing";
import HomeTasks from "components/HomeTasks/HomeTasks";
import YoutubeSection from "components/YoutubeSection/YoutubeSection";
import DroneSection from "../../components/DroneSection/DroneSection";
import AmountSection from "../../components/AmountSection/AmountSection";
import ChaklunSection from "../../components/ChaklunSection/ChaklunSection";
import DonateSection from "../../components/DonateSection/DonateSection";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";

function HomePage() {
    return (
        <div className={c.block}>
            <Landing />
            <HomeTasks />
            <YoutubeSection />
            <DroneSection />
            <AmountSection />
            <AdvantagesSection />
            <ChaklunSection />
            <DonateSection />
            <ReviewSection />
        </div>
    );
}

export default HomePage;