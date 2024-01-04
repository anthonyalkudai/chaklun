import React, {PropsWithChildren} from 'react';
import c from './HomeTasksItem.module.scss'
import CirclePicture from "../../UI/CirclePicture/CirclePicture";

interface IHomeTasksItemProps extends PropsWithChildren {
    pictureSrc?: string
}

function HomeTasksItem({ children, pictureSrc }: IHomeTasksItemProps) {
    return (
        <div className={c.item}>
            <CirclePicture pictureSrc={pictureSrc} />
            <div className={c.content}>
                {children}
            </div>
        </div>
    );
}

export default HomeTasksItem;