import React from 'react'
import location9 from '../../Assests/images/section/location-9.jpg'
import location10 from '../../Assests/images/section/location-10.jpg'
import location11 from '../../Assests/images/section/location-11.jpg'
import location12 from '../../Assests/images/section/location-12.jpg'
import location13 from '../../Assests/images/section/location-13.jpg'
import location14 from '../../Assests/images/section/location-14.jpg'
import location15 from '../../Assests/images/section/location-15.jpg'
import SplitText from "../Common/SplitText";
import AnimatedContent from '../Common/AnimatedContent';

const Neighbour = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <section class="section-neighborhoods ">
            <div class="tf-container full">
                <div class="col-12">
                    <div class="heading-section text-center mb-48">
                        <SplitText
                            text="Explore The Neighborhoods"
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
                                Find your dream apartment with our listing
                            </p>
                        </AnimatedContent>
                        
                    </div>
                    <div class="wrap-neighborhoods">
                        <div class="box-location hover-img item-1">
                            <div class="image-wrap">
                                <a href="#">
                                    <img class="lazyload" data-src={location9}
                                        src={location9} alt="" />
                                </a>

                            </div>
                            <div class="content">
                                <h6 class="text-white">New York</h6>
                                <a href="#"
                                    class="text-1 tf-btn style-border pd-23 text-white  tf-btn style-border pd-23">2.491
                                    Properties <i class="icon-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="box-location hover-img item-2">
                            <div class="image-wrap">
                                <a href="#">
                                    <img class="lazyload" data-src={location10}
                                        src={location10} alt="" />
                                </a>
                            </div>
                            <div class="content">
                                <h6 class="text-white">New York</h6>
                                <a href="#" class="text-1 tf-btn style-border pd-23 text-white">2.491 Properties <i
                                    class="icon-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="box-location hover-img item-3">
                            <div class="image-wrap">
                                <a href="#">
                                    <img class="lazyload" data-src={location11}
                                        src={location11} alt="" />
                                </a>
                            </div>
                            <div class="content">
                                <h6 class="text-white">New York</h6>
                                <a href="#" class="text-1 tf-btn style-border pd-23 text-white">2.491 Properties <i
                                    class="icon-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="box-location hover-img item-4">
                            <div class="image-wrap">
                                <a href="#">
                                    <img class="lazyload" data-src={location12}
                                        src={location12} alt="" />
                                </a>
                            </div>
                            <div class="content">
                                <h6 class="text-white">New York</h6>
                                <a href="#" class="text-1 tf-btn style-border pd-23 text-white">2.491 Properties <i
                                    class="icon-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="box-location hover-img item-5">
                            <div class="image-wrap">
                                <a href="#">
                                    <img class="lazyload" data-src={location13}
                                        src={location13} alt="" />
                                </a>
                            </div>
                            <div class="content">
                                <h6 class="text-white">New York</h6>
                                <a href="#" class="text-1 tf-btn style-border pd-23 text-white">2.491 Properties <i
                                    class="icon-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="box-location hover-img item-6">
                            <div class="image-wrap">
                                <a href="#">
                                    <img class="lazyload" data-src={location14}
                                        src={location14} alt="" />
                                </a>
                            </div>
                            <div class="content">
                                <h6 class="text-white">New York</h6>
                                <a href="#" class="text-1 tf-btn style-border pd-23 text-white">2.491 Properties <i
                                    class="icon-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="box-location hover-img item-7">
                            <div class="image-wrap">
                                <a href="#">
                                    <img class="lazyload" data-src={location15}
                                        src={location15} alt="" />
                                </a>
                            </div>
                            <div class="content">
                                <h6 class="text-white">New York</h6>
                                <a href="#" class="text-1 tf-btn style-border pd-23 text-white">2.491 Properties <i
                                    class="icon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Neighbour