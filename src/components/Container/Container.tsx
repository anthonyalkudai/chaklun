import React, {PropsWithChildren} from 'react';
import c from './Container.module.scss'

interface IContainerProps extends PropsWithChildren {}

function Container({ children }: IContainerProps) {
    return (
        <div className={c.block}>
            {children}
        </div>
    );
}

export default Container;