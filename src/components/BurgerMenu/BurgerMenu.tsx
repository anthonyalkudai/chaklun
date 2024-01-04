import React, {useRef} from 'react';
import c from './BurgerMenu.module.scss'
import {CSSTransition} from "react-transition-group";
import Menu from "../Menu/Menu";
import Logo from "../../UI/Logo/Logo";
import BurgerBtn from "../../UI/BurgerBtn/BurgerBtn";

interface IBurgerMenuProps {
    active: boolean
    deactivate: () => void
}

function BurgerMenu({ active, deactivate }: IBurgerMenuProps) {
    return (
        <CSSTransition
            classNames={{
                enter: c['block-enter'],
                exitActive: c['block-exit'],
            }}
            timeout={500}
            in={active}
            mountOnEnter
            unmountOnExit
        >
            <div className={c.block} onClick={deactivate}>
                <div  className={c.menu} onClick={(e) => e.stopPropagation()}>
                    <div className={c.logo}>
                        <Logo />
                        <div onClick={deactivate}>
                            <BurgerBtn mode={'close'} />
                        </div>
                    </div>
                    <div>
                        <Menu menuItemClassName={c['menu-item']} className={c['menu-list']} />
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
}

export default BurgerMenu;