import React from 'react'
import appstore from '../../Assests/images/items/app-store.jpg'
import chplay from '../../Assests/images/items/ch-play.jpg'
import phone from '../../Assests/images/items/phone.png'
import AnimatedContent from '../Common/AnimatedContent';
import SplitText from "../Common/SplitText";

const Downloads = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <section class="section-download tf-spacing-1">
            <div class="tf-container">
                <div class="content relative">
                    <div class="row ">
                        <div class="col-lg-6 relative z-5">
                            <div class="heading-section ">
                            <SplitText
                                text="Take Your Search With You"
                                className=" title text-anime-wave"
                                delay={150}
                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                                onLetterAnimationComplete={handleAnimationComplete}
                            />

                       
                                <AnimatedContent
                                    distance={50}
                                    direction="vertical"
                                    reverse={false}
                                    config={{ tension: 70, friction: 30 }}
                                    initialOpacity={0.2}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                <p class="text-1  animate__fadeInUp animate__animated" data-wow-duration="1.5s"
                                    data-wow-delay="0s">We're here to help you find your dream home, offer
                                    property
                                    insights, and connect you with top local agents on iOS and Android.
                                </p>

                                </AnimatedContent>
                                
                            </div>
                            <div class="wrap-download">
                                <AnimatedContent
                                    distance={50}
                                    direction="vertical"
                                    className="wrap-download gap-[11px]"
                                    reverse={false}
                                    config={{ tension: 70, friction: 30 }}
                                    initialOpacity={0.2}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <a href="#" class="app-store  animate__fadeInUp animate__animated"
                                        data-wow-duration="1s" data-wow-delay="0s"><img src={appstore}
                                            alt="" /></a>

                                </AnimatedContent>
                                <AnimatedContent
                                    distance={50}
                                    direction="vertical"
                                    className="wrap-download gap-[11px]"
                                    reverse={false}
                                    config={{ tension: 70, friction: 30 }}
                                    initialOpacity={0.2}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <a href="#" class="ch-play animate__fadeInUp animate__animated"
                                        data-wow-duration="1s" data-wow-delay="0.1s"><img src={chplay}
                                            alt="" /></a>

                                </AnimatedContent>


                            </div>
                        </div>

                    </div>
                    <div class="image-wrap lg-hide  animate__fadeInRight animate__animated"
                        data-wow-duration="2.5s" data-wow-delay="0s">
                        <AnimatedContent
                            distance={150}
                            direction="horizontal"
                            reverse={false}
                            config={{ tension: 70, friction: 30 }}
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                        >
                            <img src={phone} alt="" />
                        </AnimatedContent>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Downloads
