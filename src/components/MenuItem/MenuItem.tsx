import React, {LinkHTMLAttributes} from 'react';
import c from './MenuItem.module.scss'
import {IMenuItem} from "../../types/types";
import {Link, useLocation} from "react-router-dom";

interface IMenuItemProps extends LinkHTMLAttributes<HTMLLinkElement> {
    item: IMenuItem
}

function MenuItem({ item, className }: IMenuItemProps) {
    const { pathname } = useLocation()

    return (
        <Link to={item.path} className={pathname === item.path ? `${c.item} ${c.selected} ${className}` : `${c.item} ${className}`}>
            {item.title}
        </Link>
    );
}

export default MenuItem;
