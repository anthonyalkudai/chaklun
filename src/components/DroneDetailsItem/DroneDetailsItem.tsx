import React, {PropsWithChildren} from 'react';
import c from './DroneDetailsItem.module.scss'
import CirclePicture from "../../UI/CirclePicture/CirclePicture";

interface IDroneDetailsItemProps extends PropsWithChildren {
    pictureSrc?: string
    title: string
}

function DroneDetailsItem({pictureSrc, children, title}: IDroneDetailsItemProps) {
    return (
        <div className={c.block}>
            <div className={c.image}>
                <CirclePicture pictureSrc={pictureSrc} />
            </div>
            <div className={c.content}>
                <h4 className={c.title}>{title}</h4>

                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DroneDetailsItem;