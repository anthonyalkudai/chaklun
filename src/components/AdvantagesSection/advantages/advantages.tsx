import React, {ReactNode} from "react";
import Advantage from "../../Advantage/Advantage";
import c from "../AdvantagesSection.module.scss";
import airplane from "../../../assets/images/home/advantages/plane.png";
import reb from 'assets/images/home/advantages/reb.png'
import lock from 'assets/images/home/advantages/lock.png'
import gear from 'assets/images/home/advantages/shesterni.png'
import costs from 'assets/images/home/advantages/costs.png'
import suitcase from 'assets/images/home/advantages/suitcase.png'
import thumbup from 'assets/images/home/advantages/good.png'
import crystal from 'assets/images/home/advantages/gem.png'
import map from 'assets/images/home/advantages/map1.png'
import feather from 'assets/images/home/advantages/pero.png'

const advantages: ReactNode[] = [
    <Advantage
        className={c.advantage}
        title={'LOW TAKEOFF WEIGHT'}
        pictureSrc={feather}
        description={'The weight of the ready-to-fly equipped glider "Chaklun" in the basic presented configuration is 2.2 kg. With the use of additional devices, the maximum possible weight is up to 4 kg.'}
    />,
    <Advantage
        className={c.advantage}
        title={'LONG FLIGHT DURATION AND DISTANCE'}
        pictureSrc={airplane}
        description={'The duration of the flight of the "Chaklun" drone is from one hour (the length of the route is up to 120 km). This is a result that exceeds the capabilities of any quadcopter by two or three times.'}
    />,
    <Advantage
        className={c.advantage}
        title={'ANTI-FIRE'}
        pictureSrc={reb}
        description={'After sending on a mission, the operator on the control panel monitors the compliance of the route with the assigned mission. If signs of spoofing are detected, the operator has the opportunity to adjust the current course. And in case of loss of the GPS signal, the aircraft continues to perform the assigned mission, despite this.'}
    />,
    <Advantage
        className={c.advantage}
        title={'FUNCTIONALITY AND PROTECTION SYSTEMS'}
        pictureSrc={lock}
        description={'The Chaklun drone has functionality and protection systems similar to those equipped with drones with a cost tens to hundreds of times higher. And this has already been tested in practice.'}
    />,
    <Advantage
        className={c.advantage}
        title={'OWN PRODUCTION'}
        pictureSrc={gear}
        description={'Thanks to the fact that the "Chaklun" UAV is manufactured in Ukraine, it is possible to carry out operational overhaul (replacement of individual structural elements or transfer of surviving equipment to a new one.)'}
    />,
    <Advantage
        className={c.advantage}
        title={'LOW COST'}
        pictureSrc={costs}
        description={'Compared to analogues, the cost of one assembled and configured Chaklun drone is low. That is, the Armed Forces can get more drones for less money.'}
    />,
    <Advantage
        className={c.advantage}
        title={'COMPACTNESS AND TRANSPORTATION'}
        pictureSrc={suitcase}
        description={'The Chaklun glider can be transported both disassembled and assembled. Thanks to the wingspan of only 1400 mm, this is possible in any vehicle.'}
    />,
    <Advantage
        className={c.advantage}
        title={'SIMPLE BEHAVIOR'}
        pictureSrc={thumbup}
        description={'It is easy to learn how to fly the "Magician", because it has: take-off "by hand", execution of the route in automatic mode, landing in manual mode according to the aircraft principle with a stabilization system.'}
    />,
    <Advantage
        className={c.advantage}
        title={'DURABILITY'}
        pictureSrc={crystal}
        description={'The material of the glider is strong and at the same time sufficiently elastic. This makes it serviceable in the field.'}
    />,
    <Advantage
        className={c.advantage}
        title={'UAV OPERATOR PROTECTION.'}
        pictureSrc={map}
        description={'The ability to program the "Witch" return point at any distance from the starting point, to which the operator will move during the execution of the UAV mission.'}
    />,
]

export default advantages;