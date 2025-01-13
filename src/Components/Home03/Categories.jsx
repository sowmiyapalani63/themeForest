import React from 'react'
import SplitText from "../Common/SplitText";
import AnimatedContent from "../Common/AnimatedContent";

const Categories = () => {
    const handleAnimationComplete = () => {
        console.log("H2 title has animated!");
    };
    return (
        <section class="tf-spacing-1 section-categories pb-0">
                <div class="tf-container">
                    <div class="heading-section text-center mb-48">
                    <SplitText
                                    text="Try Searching For"
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
                                        Thousands of luxury home enthusiasts just like you have found their dream home
                                    </p>
                                </AnimatedContent>
                    </div>
                    <div class="wrap-categories-sw">
                        <div class="swiper tf-sw-categories style-pagination" data-preview="6" data-tablet="4"
                            data-mobile-sm="3" data-mobile="2" data-space="15" data-space-md="30" data-space-lg="30">
                            <div class="flex" style={{gap : "50px"}}>
                                <div class="">
                                    <a href="#" class="categories-item">
                                        <div class="icon-box">
                                            <i class="icon icon-apartment1">
                                            </i>
                                        </div>
                                        <div class="content text-center">
                                            <h5>Apartment</h5>
                                            <p class="mt-4 text-1">234 Property</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="">
                                    <a href="#" class="categories-item">
                                        <div class="icon-box">
                                            <i class="icon icon-villa">
                                            </i>
                                        </div>
                                        <div class="content text-center">
                                            <h5>Villa</h5>
                                            <p class="mt-4 text-1">234 Property</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="">
                                    <a href="#" class="categories-item active">
                                        <div class="icon-box">
                                            <i class="icon icon-studio">
                                            </i>
                                        </div>
                                        <div class="content text-center">
                                            <h5>Studio</h5>
                                            <p class="mt-4 text-1">234 Property</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="">
                                    <a href="#" class="categories-item">
                                        <div class="icon-box">
                                            <i class="icon icon-office1">
                                            </i>
                                        </div>
                                        <div class="content text-center">
                                            <h5>Office</h5>
                                            <p class="mt-4 text-1">234 Property</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="">
                                    <a href="#" class="categories-item">
                                        <div class="icon-box">
                                            <i class="icon icon-townhouse">
                                            </i>
                                        </div>
                                        <div class="content text-center">
                                            <h5>Townhouse</h5>
                                            <p class="mt-4 text-1">234 Property</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="">
                                    <a href="#" class="categories-item">
                                        <div class="icon-box">
                                            <i class="icon icon-commercial">
                                            </i>
                                        </div>
                                        <div class="content text-center">
                                            <h5>Commercial</h5>
                                            <p class="mt-4 text-1">234 Property</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="sw-pagination sw-pagination-category text-center d-lg-none mt-20 d-block"></div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Categories