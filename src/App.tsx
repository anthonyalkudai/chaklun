import React, {useEffect, useRef, useState} from "react";
import Router from './routes/Router'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TopHeader from "./components/TopHeader/TopHeader";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";


function App() {
    const [onBurgerMenuActive, setOnBurgerMenuActive] = useState<boolean>(false)
    const topHeaderRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLHeadElement>(null)

    useEffect(() => {
        window.addEventListener('scroll', moveHeader)

        return () => {
            window.removeEventListener('scroll', moveHeader)
        }
    })

    const onBurgerBtnClick = () => {
        setOnBurgerMenuActive(true)
    }

    const closeBurgerMenu = () => {
        setOnBurgerMenuActive(false)
    }

    function moveHeader() {
        if (headerRef.current && topHeaderRef.current) {
            const headersTotalHeight: number = headerRef.current.clientHeight + topHeaderRef.current.clientHeight

            if (window.scrollY > headersTotalHeight) {
                headerRef.current.className = 'header'
            } else {
                headerRef.current.className = ''
            }
        }
    }

    return (
        <>
            <div ref={topHeaderRef}>
                <TopHeader/>
            </div>

            <div className="content-wrapper">
                <header ref={headerRef}>
                    <Header onBurgerBtnClicked={onBurgerBtnClick} />
                </header>
                <div className="main-and-footer">
                    <main>
                        <Router/>
                    </main>

                    <footer>
                        <Footer/>
                    </footer>
                </div>
            </div>
            <BurgerMenu
                active={onBurgerMenuActive}
                deactivate={closeBurgerMenu}
            />
        </>
    )
}

export default App
