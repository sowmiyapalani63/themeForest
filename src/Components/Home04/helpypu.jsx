import React, { useState, useEffect, useRef } from 'react'
import SplitText from "../Common/SplitText";
import AnimatedContent from "../Common/AnimatedContent";
import 'animate.css';

const Helpypu = () => {
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
            { threshold: 0.1 }
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
        <section class="section-help tf-spacing-1 pb-0">
            <div class="tf-container">
                <div class="row">
                    <div class="col-12">
                        <div class="heading-section text-center">
                            <SplitText
                                text="Property Type"
                                className="title text-anime-wave"
                                delay={50}
                                animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                                onLetterAnimationComplete={handleAnimationComplete}

                            />
                            <AnimatedContent
                                distance={5}
                                direction="vertical"
                                reverse={false}
                                config={{ tension: 80, friction: 20 }}
                                initialOpacity={0.2}
                                animateOpacity
                                scale={1.1}
                                threshold={0.2}
                            >
                                <p
                                    className="text-1 animate__fadeInUp animate__animated">
                                    Thousands of luxury home enthusiasts just like you visit our
                                    website.
                                </p>
                            </AnimatedContent>
                        </div>
                        <div class="tf-grid-layout md-col-2 mb-6">
                            <div
                                ref={cardRef}
                                className={`icons-box  style-3 ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}
                            >

                                <div class="tf-icon ">
                                    <i class="icon-agent-2"></i>
                                </div>
                                <div class="content">
                                    <h5 class="title "><a href="#">Find the Best Agent for You</a></h5>
                                    <p class=" text-1">Explore video tours, in-depth research, and articles on
                                        20,000
                                        neighborhoods. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" class="tf-btn-link color-3">
                                        <span>Learn More</span>
                                    </a>
                                </div>
                            </div>
                            <div
                                ref={cardRef}
                                className={`icons-box  style-3 ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}
                            >
                                <div class="tf-icon ">
                                    <i class="icon-location-4"></i>
                                </div>
                                <div class="content">
                                    <h5 class="title "><a href="#">Explore Great Neighborhoods</a></h5>
                                    <p class=" text-1">Explore video tours, in-depth research, and articles on
                                        20,000
                                        neighborhoods. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" class="tf-btn-link color-3">
                                        <span>Learn More</span>
                                    </a>
                                </div>
                            </div>
                            <div
                                ref={cardRef}
                                className={`icons-box  style-3 ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}
                            >
                                <div class="tf-icon ">
                                    <i class="icon-house-1"></i>
                                </div>
                                <div class="content">
                                    <h5 class="title "><a href="#">Find highly rated apartments</a></h5>
                                    <p class=" text-1">Explore video tours, in-depth research, and articles on
                                        20,000
                                        neighborhoods. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" class="tf-btn-link color-3">
                                        <span>Learn More</span>
                                    </a>
                                </div>
                            </div>
                            <div
                                ref={cardRef}
                                className={`icons-box  style-3 ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}
                            >
                                <div class="tf-icon ">
                                    <i class="icon-find-2"></i>
                                </div>
                                <div class="content">
                                    <h5 class="title "><a href="#">Search Recent Property Sales</a></h5>
                                    <p class=" text-1">Explore video tours, in-depth research, and articles on
                                        20,000
                                        neighborhoods. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" class="tf-btn-link color-3">
                                        <span>Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item text-center">
                <img src="images/section/section-help.png" alt="" />
            </div>
        </section>
    )
}

export default Helpypu
