import React from 'react';
import '../../Styles/css/animate.min.css';
import '../../Styles/css/bootstrap.css';
import '../../Styles/css/styles.css';
import '../../Styles/css/odometer.min.css';
import '../../Assests/icons/icomoon/style.css';
import person2 from '../../Assests/images/section/person-2.png';
import SplitText from "../Common/SplitText";
import AnimatedContent from "../Common/AnimatedContent";

const Appraisal = () => {
    const handleAnimationComplete = () => {
        console.log("H2 title has animated!");
    };
    return (
        <section className="section-appraisal">
            <div className="wg-appraisal style-2">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content text-center">
                                <div className="heading-section mb-32 text-start">
                                    <SplitText
                                        text="Are You Selling Or Renting Your Property?"

                                        className="title text-anime-wave text-start text-white"
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
                                            className="text-1 animate__fadeInUp animate__animated text-white">
                                            Thousands of luxury home enthusiasts just like you visit our
                                            website.
                                        </p>
                                    </AnimatedContent>
                                </div>
                                <a
                                    href="#"
                                    className="tf-btn bg-color-white fw-7 pd-11 animate__fadeInUp animate__animated"
                                    data-wow-duration="1s"
                                    data-wow-delay="0s"
                                >
                                    Request your free appraisal
                                </a>
                                <div className="person mt-4">
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
                                        <img
                                            className="animate__fadeInRight animate__animated"
                                            src={person2}
                                            alt="Person illustration"
                                        />  
                                    </AnimatedContent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appraisal;
