import React, {HTMLAttributes} from 'react';
import c from './Advantage.module.scss'
import CirclePicture from "../../UI/CirclePicture/CirclePicture";


interface IAdvantageProps extends HTMLAttributes<HTMLDivElement> {
    pictureSrc?: string
    title: string
    description: string
}

function Advantage({ description, pictureSrc, title, className, ...props }: IAdvantageProps) {
    return (
        <div className={`${c.block} ${className}`} {...props}>
            <div className={c.content}>
                <p className={c.text}>
                    {description}
                </p>
            </div>
            <div className={c['img-block']}>
                <CirclePicture pictureSrc={pictureSrc} />
                <h4 className={c.title}>{title}</h4>
            </div>
        </div>
    );
}

export default Advantage;