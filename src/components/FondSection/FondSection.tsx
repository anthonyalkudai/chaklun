import React from 'react';
import c from './FondSection.module.scss'
import Container from "../Container/Container";
import {Link} from "react-router-dom";

function FondSection() {
    return (
        <div>
            <div className={c['page-content']}>
                <div className={c['head-container']}>
                    <div className={c['head-shape']}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 91.01" preserveAspectRatio="none">
                            <path
                                d="M211,21a429.73,429.73,0,0,1,94-2c75.81,6.66,94.56,25.51,100,32,15.2,18.14,17.38,40.68,26,40,9.18-.72,7.66-26.36,28-39,13.08-8.13,27.68-6.19,29-6,19.5,2.86,22.53,18.4,36,18,15.47-.46,16-21.09,35-27,18.63-5.79,28.46,10.82,56,11,17.76.11,27.66-6.7,43-13,1.67-.68,27.3-8.31,56-14.49,0,0,25.6-5.52,58-9.51,41.3-5.08,122.78-9.93,228-11H0C96.11,27.3,165,26.91,211,21Z"></path>
                        </svg>
                    </div>
                    <div className={c['head-overlay']}></div>
                    <div className={c['head-content']}>
                        <h2 className={c['head-title']}>"Вірний напрямок"</h2>
                    </div>
                </div>

                <Container>
                    <div className={c['main-container']}>

                        <div className={c['main-title-container']}>
                            <div className={c['main-title']}>
                                <span className={c.span}>Нажаль, на сьогодні військові вимушені купувати комплекси за власні або волонтерські кошти.</span>
                                <br/>
                                <span className={c.span}>Спираючись на передплачені замовлення сьогодні за наявних потужностей ми виробляємо 20-30 літаків на місяць.</span>
                                <br/>
                                <span
                                    className={c.span}>Хоча, у той же час, наявні потужності дозволяють виробляти більше <strong>100 комплексів</strong> на місяць, що потребує гарантованих замовлень та фінансування.</span>
                                <br/>
                                <span className={c.span}>Головне, чого ми прагнемо - це те, щоб військові, наші захисники, не купували, а отримували</span>
                                <br/>
                                <span className={c.span}>безкоштовно комплекси "Чаклун".</span>
                                <br/>
                                <br/>
                                <span className={c.span}>Благодійний фонд "Вірний напрямок" підтримує нашу мету, тому ініціював проєкт "Ми - Очі ЗСУ". Відправляючи свої ДОНАТИ на рахунки цього фонду – ви автоматично приймаєте участь в виготовленні БпАК "ЧАКЛУН" для ЗСУ. А це – ще один крок до перемоги. Долучайтесь!</span>
                                <br/>
                            </div>
                        </div>

                        <div className={c['btn-container']}>
                            <Link to="/" className={c['btn-style']}>МОНОБАНКА</Link>
                        </div>

                        <div className={c['card-info-container']}>
                            <div className={c['card-background']}>
                                <div className={c['card-info']}>
                            <span
                                className={c.span}><strong>БО «БЛАГОДІЙНИЙ ФОНД «ВІРНИЙ НАПРЯМОК»</strong></span>
                                    <span
                                        className={c.span}><strong>CO «CHARITY FOUNDATION «RIGHT DIRECTION»</strong></span>
                                    <span><strong className={c.yellow}>Адреса: </strong>49000, м.Дніпро, вул.Старокозацька, буд. 52-А, кв.98</span>
                                    <span><strong className={c.yellow}>ЄДРПОУ: </strong>44870443</span>
                                    <span><strong className={c.yellow}>IBAN: </strong>UA983073500000026004001400201 (UAH/USD)</span>
                                    <span><strong className={c.yellow}>МФО: </strong>307350</span>
                                    <div className={c.center}>
                                <span
                                    className={c.span}><em>УВАГА: Обов'язково в призначенні платежу зазначайте:</em></span>
                                    </div>
                                    <div className={c.center}>
                            <span className={c.span}>
                                <em><span className={c.yellow}><strong>"Благодійна допомога"</strong></span></em>
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={c['contact-info-container']}>
                            <div className={c['contact-info']}>
                                <span className={c.span}>Контактні дані: тел: +380 (97) 029 77 77</span>
                                <span className={c.span}>email: <Link to="/">cf.rightdirection@gmail.com</Link><br/></span>
                            </div>
                        </div>

                        <div className={c['social-btn-container']}>
                            <div className={c['social-btn-content']}>
                                <Link to="/" className={c['social-btn']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
                                         className="bi bi-telegram" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                                    </svg>
                                    <span>Telegram</span>
                                </Link>
                                <Link to="/" className={c['social-btn']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
                                         className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg>
                                    <span>Facebook</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default FondSection;