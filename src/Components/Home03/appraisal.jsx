import React from 'react'
import person3 from '../../Assests/images/section/person-3.png'
import SplitText from "../Common/SplitText";
import AnimatedContent from "../Common/AnimatedContent";

const Appraisal = () => {
    const handleAnimationComplete = () => {
        console.log("H2 title has animated!");
    };
    return (
        <section class="section-appraisal style-2">
            <div class="wg-appraisal style-3">
                <div class="tf-container">
                    <div class="row">
                        <div class="col-12">
                            <div class="content">
                                <div class="heading-section mb-32">
                                    <SplitText
                                        text="Have a confidences in any   market with us"
                                        className="title text-anime-wave text-start "
                                        delay={50}
                                        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                                        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                        onLetterAnimationComplete={handleAnimationComplete}

                                    />
                                    <AnimatedContent
                                        distance={35}
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
                                            Proty® agents have the experience to get the job done in today’s market, backed by a robust network of over 140,000 agents in more than 9,000 offices worldwide. With our extensive global connections and deep local insights, you gain an edge that transcends what you'll find online.
                                        </p>
                                    </AnimatedContent>
                                </div>
                                <a href="#"
                                    class="tf-btn bg-color-primary pd-19 fw-7  animate__fadeInUp animate__animated"
                                    data-wow-duration="1s" data-wow-delay="0s">
                                    Find your agnet today
                                </a>

                                <div class="person  animate__fadeInRight animate__animated"
                                    data-wow-duration="1s" data-wow-delay="0s">
                                    <AnimatedContent
                                        distance={250}
                                        direction="horizontal"
                                        reverse={false}
                                        config={{ tension: 70, friction: 30 }}
                                        initialOpacity={0.3}
                                        animateOpacity
                                        scale={1.1}
                                        threshold={0.2}
                                    >
                                         <img src={person3} alt="" />
                                    </AnimatedContent>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Appraisal
