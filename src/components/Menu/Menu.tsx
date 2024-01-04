import React, {HTMLAttributes} from 'react';
import c from './Menu.module.scss'
import {IMenuItem} from "../../types/types";
import { menuItems as defaultMenuItems } from "../../constants/AppContants";
import MenuItem from "../MenuItem/MenuItem";

interface IMenuProps extends HTMLAttributes<HTMLUListElement> {
    menuItems?: IMenuItem[]
    menuItemClassName?: string
}

function Menu({ menuItems, className, menuItemClassName, ...props }: IMenuProps) {
    menuItems = menuItems ?? defaultMenuItems

    return (
        <ul {...props} className={`${c.list} ${className}`}>
            {menuItems.map((item) => (
                <li key={item.path}>
                    <MenuItem className={menuItemClassName} item={item} />
                </li>
            ))}
        </ul>
    );
}

export default Menu;