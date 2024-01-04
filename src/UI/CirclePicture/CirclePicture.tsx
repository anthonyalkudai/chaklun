import React from 'react';
import c from './CirclePicture.module.scss'

interface ICircleProps {
    pictureSrc?: string
}

function CirclePicture({pictureSrc}: ICircleProps) {
    return (
        <div className={c['image-block']}>
            {pictureSrc ? (
                <img className={c.picture} src={pictureSrc} alt="task"/>
            ) : (
                <div className={c.image}/>
            )}
        </div>
    );
}

export default CirclePicture;