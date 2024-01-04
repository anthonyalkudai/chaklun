import React from 'react';
import c from './Logo.module.scss'
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg'
import {Link} from "react-router-dom";
import {RoutePaths} from "../../routes/routeConfig";

function Logo() {
    return (
        <Link to={RoutePaths.HOME} className={c.logo}>
            <figure><LogoIcon/></figure>
        </Link>
    );
}

export default Logo;
