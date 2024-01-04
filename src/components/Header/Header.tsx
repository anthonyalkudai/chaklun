import React from 'react';
import c from './Header.module.scss'
import Container from "../Container/Container";
import Menu from "components/Menu/Menu";
import Logo from "UI/Logo/Logo";
import BurgerBtn from "../../UI/BurgerBtn/BurgerBtn";

interface IHeaderProps {
    onBurgerBtnClicked?: () => void
}

function Header({ onBurgerBtnClicked }: IHeaderProps) {
    return (
        <div className={c.block}>
            <Container>
                <div className={c['inner-block']}>
                    <div className={c.left}>
                        <BurgerBtn onClick={onBurgerBtnClicked} />
                        <Logo />
                    </div>
                    <div className={c.right}>
                        <nav className={c.nav}>
                            <Menu />
                        </nav>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Header;