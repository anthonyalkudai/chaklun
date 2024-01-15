import React, {useEffect, useRef} from 'react';
import c from './AboutSection.module.scss'
import plane1 from 'assets/images/about/plane1.jpg'
import plane2 from 'assets/images/about/plane2.jpg'
import {Link} from "react-router-dom";
import pdf from "assets/pdf/arw_outgppp.pdf"

function AboutSection() {
    const containers = useRef<HTMLDivElement[]>([])
    const bottomContainer = useRef<HTMLDivElement>(null)
    const leftSide = useRef<HTMLDivElement>(null)
    const rightSide = useRef<HTMLDivElement>(null)

    useEffect(() => {
        window.addEventListener('scroll', checkContainers);

        return () => {
            window.removeEventListener('scroll', checkContainers)
        }
    }, [])

    function checkContainers() {
        if (bottomContainer.current && leftSide.current && rightSide.current) {
            const contTop = bottomContainer.current.getBoundingClientRect().top;
            const contHeight = bottomContainer.current.clientHeight;
            const windowHeight = window.innerHeight;

            const visiblePercent = ((windowHeight - contTop) / (windowHeight + contHeight)) * 100;

            if (visiblePercent === 100 && contTop < 120) {
                leftSide.current.style.transform = 'translateX(0)';
                rightSide.current.style.transform = 'translateX(0)';
            } else if (visiblePercent > 30) {
                leftSide.current.style.transform = 'translateX(0)';
                leftSide.current.style.filter = 'none';
                rightSide.current.style.transform = 'translateX(0)';
                rightSide.current.style.filter = 'none';
            } else if (visiblePercent > 20) {
                leftSide.current.style.transform = `translateX(${Math.round(visiblePercent - 100)}px)`;
                leftSide.current.style.filter = `blur(${Math.max(0, 25 - visiblePercent)}px)`;
                rightSide.current.style.transform = `translateX(${Math.round(visiblePercent + 100)}px)`;
                rightSide.current.style.filter = `blur(${Math.max(0, 25 - visiblePercent)}px)`;
            } else {
                leftSide.current.style.transform = 'translateX(-300%)';
                rightSide.current.style.transform = 'translateX(300%)';
            }
        }

        containers.current.forEach(bottomContainer => {
            if (!bottomContainer) return

            const contTop = bottomContainer.getBoundingClientRect().top;
            const contHeight = bottomContainer.clientHeight;
            const windowHeight = window.innerHeight;

            const visiblePercent = ((windowHeight - contTop) / (windowHeight + contHeight)) * 100;

            if (visiblePercent === 100 && contTop >= 0 && contTop + contHeight <= windowHeight) {
                bottomContainer.style.transform = 'translateY(0)';
            } else if (visiblePercent > 10) {
                bottomContainer.style.transform = `translateY(${Math.round(visiblePercent)}px)`;
            } else {
                bottomContainer.style.transform = 'translateY(20%)';
            }
        });
    }

    return (
        <div className={c['page-content']}>
            <div className={c['head-container']}>
                <div className={c['head-shape']}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 86.44" preserveAspectRatio="none">
                        <path d="M1000,0H0V68.64A50,50,0,0,0,85.38,48.81v-.09a25.19,25.19,0,0,0,20.89-4.31,32.85,32.85,0,0,0,40.49,2.38c9.39-1.53,16.67-8.4,17.67-17a14.89,14.89,0,0,0,1.74.57,14.7,14.7,0,0,0,11.15,3.1c4.17,5.14,11.51,7.83,19.11,6.32a20.31,20.31,0,0,0,13.62-9.33A20.31,20.31,0,0,0,219,32.56a13.49,13.49,0,0,0,24.86,7.25,13.43,13.43,0,0,0,10-1.91c2.66,8.32,12.06,13.37,21.9,11.42a19.93,19.93,0,0,0,14.75-11.58,24.3,24.3,0,0,0,13,.92,23.88,23.88,0,0,0,14-8.3A13.46,13.46,0,0,0,334,32.69a25.39,25.39,0,0,0,7.23.41,30.38,30.38,0,0,0,6-1.2c.2.4.4.9.6,1.3a20.81,20.81,0,0,0,14.6,11c10.2,2.2,20-2.9,22.9-11.5a13.84,13.84,0,0,0,10.3,2.1,14,14,0,0,0,19.25,4.63l.05,0a14.17,14.17,0,0,0,6.7-11.8,20,20,0,0,0,9.3-2,21.31,21.31,0,0,0,14,9.9c10.6,2.3,20.9-3.4,23.2-12.7a28.46,28.46,0,0,0,37.2,7.1A23.53,23.53,0,0,0,510,26l.24,0a8.91,8.91,0,0,0,2.07-.72A15.07,15.07,0,0,0,528,35.9a17.66,17.66,0,0,0,33.65-4.66,26.65,26.65,0,0,0,5.65,3.46,28.5,28.5,0,0,0,7,2.2,29.16,29.16,0,0,0,15.2-1.3c2.8,6.6,9.3,11.8,17.5,13.3,11.4,2.1,22.2-3.8,25.3-13.4,0-.1.1-.2.1-.4.3.2.7.4,1,.6a15.93,15.93,0,0,0,10.7,1.5,15.75,15.75,0,0,0,26.69-.66A10.85,10.85,0,0,0,686.86,35a10.82,10.82,0,0,0,7-.48q.7.31,1.41.58c2.16,6.21,9.11,10.24,16.67,9.28a16,16,0,0,0,12.48-8.49,19.56,19.56,0,0,0,10.37,1.45,19.23,19.23,0,0,0,9.36-3.78,21.69,21.69,0,0,0,2.93,0,13.67,13.67,0,0,0,1.63-.16,10.84,10.84,0,0,0,15.13-2.91,10.8,10.8,0,0,0,7.32,2.19,24.79,24.79,0,0,0,3.52,1.48,25.09,25.09,0,0,0,8.1,1.4h.65A18.51,18.51,0,0,0,795.9,38.2,18.82,18.82,0,0,0,809.34,30c2.67,10,12.75,17.44,24.8,17.44,9.38,0,17.57-4.5,22-11.2a32,32,0,0,0,14,4.4,46.9,46.9,0,0,0,46.1,17.89A55,55,0,0,0,1000,73.07V0Z"></path>
                    </svg>
                </div>
                <div className={c['head-overlay']}></div>
                <div className={c['head-content']}>
                    <h2 className={`${c['head-title']} ${c.h2}`}>UAV "Chaklun"</h2>
                </div>
            </div>

            <div className={c['main-container']}>
                <div className={c['content-row']}>
                    <div className={c['main-left-content']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#587483" className="bi bi-airplane-engines-fill" viewBox="0 0 16 16" style={{ transform: 'rotate(90deg)', marginBottom: 10 }}>
                            <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0"/>
                        </svg>
                        <h3 className={`${c['main-title']} ${c.h3}`}>UAV "Chaklun"</h3>

                        <div className={c['main-info-title']}>
                        <span className={c.span}>
                            Small unmanned reconnaissance aviation complex of the aircraft type of Ukrainian production, which is an alternative to quadcopters and expensive imported reconnaissance drones.
                        </span>
                            <br />
                            <br />
                            <span className={c.span}>Scope of application:</span>
                            <ul className={c['list-square']}>
                                <li>
                                    <span className={c.span}>reconnaissance of the enemy's territory</span>
                                </li>
                                <li>
                                    <span className={c.span}>aerial survey and aerial photography of the area with fixation of coordinates</span>
                                </li>
                                <li>
                                    <span className={c.span}>patrolling the territory</span>
                                </li>
                                <li>
                                    <span className={c.span}>patrolling the territory</span>
                                </li>
                                <li>
                                    <span className={c.span}>search operations</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div ref={el => containers.current.push(el as HTMLDivElement)} className={`${c['main-right-content']} ${c['animated-to-up']}`} style={{ paddingLeft: 100 }}>
                        <div className={c['main-right-img']}>
                            <img className={c['img-responsive']} src={plane1} alt="preview" />
                            <div className={c['img-shadow']} style={{ top: 90, left: -30 }} />
                        </div>
                    </div>
                </div>

                <div className={c['content-row']}>

                    <div ref={el => containers.current.push(el as HTMLDivElement)} className={`${c['main-right-content']} ${c['animated-to-up']}`} style={{ paddingRight: 100 }}>
                        <div className={c['main-right-img']}>
                            <img className={c['img-responsive']} src={plane2} alt="preview" />
                            <div className={c['img-shadow']} style={{ top: 90, right: -30 }} />
                        </div>
                    </div>

                    <div className={c['main-left-content']} style={{ paddingLeft: 40 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#587483" className="bi bi-clipboard2-data-fill" viewBox="0 0 16 16" style={{ marginBottom: 10 }}>
                            <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
                            <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"/>
                        </svg>
                        <h3 className={`${c['main-title']} ${c.h3}`}>Reconnaissance UAVs to perform the following tasks:</h3>
                        <div className={c['main-info-title']}>
                            <ul className={c['list-square']}>
                                <li>
                                    <span className={c.span}>conducting aerial reconnaissance of designated areas in order to identify locations of troops, facilities, military equipment and means of defeating the enemy</span>
                                </li>
                                <li>
                                    <span className={c.span}>identifying targets for fire damage and adjusting artillery fire, monitoring the results of fire damage to specified targets</span>
                                </li>
                                <li>
                                    <span className={c.span}>confirmation of previously received intelligence data</span>
                                </li>
                                <li>
                                    <span className={c.span}>clarifying the terrain of the areas of future hostilities</span>
                                </li>
                                <li>
                                    <span className={c.span}>checking the degree of masking of your objects</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={bottomContainer} className={`${c['bottom-container']} ${c['bottom-anim']}`}>
                <div className={c['bottom-content']}>
                    <div className={c['bottom-title']}>
                        <h3 className={`${c['text-bottom']} ${c.h3}`}>Technical and technical characteristics of UAV "CHAKLUN"</h3>
                    </div>
                    <div ref={leftSide} className={`${c['bottom-left-content']} ${c['animated-to-left-side']}`}>
                        <ul className={c['list-circle']}>
                            <li>Type: Aircraft-type unmanned aircraft complex</li>
                            <li>Functions/purposes: Aerial surveying and aerial photography of the area with coordinate reference, conducting observation and reconnaissance missions</li>
                            <li>Transport dimensions: wingspan - 1400 mm, overall length of the glider - 910 mm</li>
                            <li>Take-off weight: working take-off weight - 2.2 kg, maximum - 3.6 kg</li>
                            <li>Cruising speed: 80 km/h</li>
                            <li>Flight time: Time in the air – 60 minutes. (guaranteed)</li>
                            <li>The length of the route per departure: The length of the route is up to 100 km</li>
                        </ul>
                    </div>
                    <div ref={rightSide} className={`${c['bottom-right-content']} ${c['animated-to-right-side']}`}>
                        <ul className={c['list-circle']}>
                            <li>Cruise altitude: Cruise altitude - 500 m, Possible flight altitude - up to 3000 m</li>
                            <li>Permissible wind load in flight: The maximum wind speed during operation is up to 12 m/s</li>
                            <li>Operating temperature range: -20... +40 (lithium-ion batteries reduce capacity by up to 30% depending on temperature)</li>
                            <li>The maximum speed of the given flight: 130 km/h</li>
                        </ul>
                    </div>
                    <div className={c['bottom-footer']}>
                    <a href = {pdf} target = "_blank"><Link to={'/'} className={c['btn-style']}>File to download</Link></a>
                    </div>
                </div>
            </div>

            <div className={c['footer-container']}>
                <div className={c['footer-shape']}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 86.44" preserveAspectRatio="none">
                        <path d="M1000,0H0V68.64A50,50,0,0,0,85.38,48.81v-.09a25.19,25.19,0,0,0,20.89-4.31,32.85,32.85,0,0,0,40.49,2.38c9.39-1.53,16.67-8.4,17.67-17a14.89,14.89,0,0,0,1.74.57,14.7,14.7,0,0,0,11.15,3.1c4.17,5.14,11.51,7.83,19.11,6.32a20.31,20.31,0,0,0,13.62-9.33A20.31,20.31,0,0,0,219,32.56a13.49,13.49,0,0,0,24.86,7.25,13.43,13.43,0,0,0,10-1.91c2.66,8.32,12.06,13.37,21.9,11.42a19.93,19.93,0,0,0,14.75-11.58,24.3,24.3,0,0,0,13,.92,23.88,23.88,0,0,0,14-8.3A13.46,13.46,0,0,0,334,32.69a25.39,25.39,0,0,0,7.23.41,30.38,30.38,0,0,0,6-1.2c.2.4.4.9.6,1.3a20.81,20.81,0,0,0,14.6,11c10.2,2.2,20-2.9,22.9-11.5a13.84,13.84,0,0,0,10.3,2.1,14,14,0,0,0,19.25,4.63l.05,0a14.17,14.17,0,0,0,6.7-11.8,20,20,0,0,0,9.3-2,21.31,21.31,0,0,0,14,9.9c10.6,2.3,20.9-3.4,23.2-12.7a28.46,28.46,0,0,0,37.2,7.1A23.53,23.53,0,0,0,510,26l.24,0a8.91,8.91,0,0,0,2.07-.72A15.07,15.07,0,0,0,528,35.9a17.66,17.66,0,0,0,33.65-4.66,26.65,26.65,0,0,0,5.65,3.46,28.5,28.5,0,0,0,7,2.2,29.16,29.16,0,0,0,15.2-1.3c2.8,6.6,9.3,11.8,17.5,13.3,11.4,2.1,22.2-3.8,25.3-13.4,0-.1.1-.2.1-.4.3.2.7.4,1,.6a15.93,15.93,0,0,0,10.7,1.5,15.75,15.75,0,0,0,26.69-.66A10.85,10.85,0,0,0,686.86,35a10.82,10.82,0,0,0,7-.48q.7.31,1.41.58c2.16,6.21,9.11,10.24,16.67,9.28a16,16,0,0,0,12.48-8.49,19.56,19.56,0,0,0,10.37,1.45,19.23,19.23,0,0,0,9.36-3.78,21.69,21.69,0,0,0,2.93,0,13.67,13.67,0,0,0,1.63-.16,10.84,10.84,0,0,0,15.13-2.91,10.8,10.8,0,0,0,7.32,2.19,24.79,24.79,0,0,0,3.52,1.48,25.09,25.09,0,0,0,8.1,1.4h.65A18.51,18.51,0,0,0,795.9,38.2,18.82,18.82,0,0,0,809.34,30c2.67,10,12.75,17.44,24.8,17.44,9.38,0,17.57-4.5,22-11.2a32,32,0,0,0,14,4.4,46.9,46.9,0,0,0,46.1,17.89A55,55,0,0,0,1000,73.07V0Z"></path>
                    </svg>
                </div>
                <div className={c['footer-overlay']}></div>
            </div>
        </div>
    );
}

export default AboutSection;