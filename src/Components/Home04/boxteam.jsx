import React, { useState, useEffect, useRef } from 'react'
import 'animate.css';
import secbox from '../../Assests/images/section/section-box-team.jpg'
import secbox2 from '../../Assests/images/section/section-box-team-2.jpg'
import SplitText from "../Common/SplitText";
import AnimatedContent from "../Common/AnimatedContent";

const Boxteam = () => {
    const handleAnimationComplete = () => {
        console.log("H2 title has animated!");
    };
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {

                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);
    return (
        <section class="section-box-team  style-2 tf-spacing-1 pb-0 ">
            <div class="tf-container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="content-inner">
                            <div class="heading-section  mb-48">
                                <SplitText
                                    text="Selling Agents And Property Management Specialists"
                                    className="title text-anime-wave text-start"
                                    delay={50}
                                    animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                                    animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                                    easing="easeOutCubic"
                                    threshold={0.2}
                                    rootMargin="-50px"
                                    onLetterAnimationComplete={handleAnimationComplete}

                                />
                            </div>
                            <div class="content mb-48  animate__fadeInUp animate__animated"
                                data-wow-duration="1s" data-wow-delay="0s">

                                <AnimatedContent
                                    distance={25}
                                    direction="vertical"
                                    reverse={false}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0.2}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <p class="text-1 description-1 mb-16">Our team of real estate professionals have
                                        helped
                                        hundreds of buyers, sellers and investors make decisions that they feel were
                                        and
                                        continue to be right for them years down the road. We measure success not by
                                        the
                                        sales volume that ranks us among the top 1% of local agents, but by
                                        delivering
                                        results and fulfilling the trust placed on us by clients.</p>
                                    <p class="description-2 text-1 mb-24">We stand ready to serve you as your
                                        California
                                        real estate team.</p>
                                    <a href="#"
                                        class="tf-btn bg-color-primary pd-12 fw-7  animate__fadeInUp animate__animated"
                                        data-wow-duration="1s" data-wow-delay="0s">Meet The Team</a>
                                </AnimatedContent>

                            </div>
                            <div class="wrap-counter">
                                <div class="counter-item style-2">
                                    <div class="count">
                                        <div class="icons">
                                            <i class="icon-house"></i>
                                        </div>
                                        <div class="counter-number  ">
                                            <div class="style-2 style-2-1 odometer odometer-auto-theme"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">9</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span></div></div>
                                            <span class="sub plus">+</span>
                                        </div>
                                        <p class="text-4 ">Homes for Sale</p>
                                    </div>
                                </div>
                                <div class="counter-item style-2">
                                    <div class="count">
                                        <div class="icons">
                                            <i class="icon-user-2"></i>
                                        </div>
                                        <div class="counter-number ">
                                            <div class="style-2 style-2-2 odometer odometer-auto-theme"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">2</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">8</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">7</span></span></span></span></span></div></div>
                                        </div>
                                        <p class="text-4 ">Real Estate Agents</p>
                                    </div>
                                </div>
                                <div class="counter-item style-2">
                                    <div class="count">
                                        <div class="icons">
                                            <i class="icon-shield"></i>
                                        </div>
                                        <div class="counter-number ">
                                            <div class="style-2 style-2-3 odometer odometer-auto-theme"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">3</span></span></span></span></span></div></div>
                                            <span>.600</span>
                                            <span class="sub plus">+</span>
                                        </div>
                                        <p class="text-4 ">Properties Sold</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="wrap-image relative ">
                            <div
                                ref={cardRef}
                                className={`image-wrap hover-img-wrap img-1 ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}
                            >

                                <img class="lazyload parallax-img" data-src="images/section/section-box-team.jpg"
                                    src={secbox} alt="" />
                            </div>
                            <div
                                ref={cardRef}
                                className={`image-wrap hover-img-wrap img-2 ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}
                            >

                                <img class="lazyload parallax-img" data-src="images/section/section-box-team-2.jpg"
                                    src={secbox2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Boxteam
