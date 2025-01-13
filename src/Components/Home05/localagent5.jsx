import React from 'react'
import agent1 from '../../Assests/images/section/agent-item-1.jpg'
import agent2 from '../../Assests/images/section/agent-item-2.jpg'
import agent3 from '../../Assests/images/section/agent-item-3.jpg'
import agent4 from '../../Assests/images/section/agent-item-4.jpg'
import AnimatedContent from '../Common/AnimatedContent';
import SplitText from "../Common/SplitText";

const Localagent5 = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <section class="section-local-agent ">
        <div class="tf-container">
            <div class="row ">
                <div class="col-12 ">
                    <div class="heading-section mb-48 text-center">
                    <SplitText
                                text="Choose Your Local Agent"
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
                                    data-wow-delay="0s">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Integer vel
                                    lobortis justo
                                </p>

                                </AnimatedContent>

                    </div>
                    <div class="swiper style-pagination tf-sw-mobile-1 " data-screen="575" data-preview="1"
                        data-space="15">
                        <div class="swiper-wrapper tf-layout-mobile-sm sm-col-2 lg-col-4 mb-48">
                            <div class=''>
                            <AnimatedContent
                                    distance={10}
                                    direction="vertical"
                                    reverse={false}
                                    config={{ tension: 70, friction: 30 }}
                                    initialOpacity={0.2}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                <div class="agent-item hover-img style-2 animate__fadeInUp animate__animated"
                                    data-wow-duration="1s" data-wow-delay="0s">
                                    <div class="image-wrap">
                                        <a href="agents-details.html">
                                            <img class="lazyload" data-src="images/section/agent-item-5.jpg"
                                                src={agent1} alt="" />
                                        </a>
                                        <ul class="tf-social style-3">
                                            <li><a href="#"><i class="icon-fb"></i></a></li>
                                            <li><a href="#"><i class="icon-X"></i></a></li>
                                            <li><a href="#"><i class="icon-linked"></i></a></li>
                                            <li><a href="#"><i class="icon-ins"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content justify-center">
                                        <div class="author text-center">
                                            <h5 class="name lh-30"><a href="agents-details.html">Leslie
                                                    Alexander</a></h5>
                                            <p class="text-2 lh-18">Sale agent</p>
                                        </div>
                                    </div>
                                    <div class="wrap-btn-icon">
                                        <a href="#" class="btn-icon phone hover-tooltip style-2"><i
                                                class="icon-phone-3"></i><span class="tooltip ">Call</span></a>
                                        <a href="#" class="btn-icon message hover-tooltip style-2"><i
                                                class="icon-letter"> </i><span
                                                class="tooltip ">Message</span></a>
                                    </div>
                                </div>
                                </AnimatedContent>
                            </div>
                            <div class="">
                            <AnimatedContent
                                    distance={10}
                                    direction="vertical"
                                    reverse={false}
                                    config={{ tension: 70, friction: 30 }}
                                    initialOpacity={0.2}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                <div class="agent-item hover-img style-2 animate__fadeInUp animate__animated"
                                    data-wow-duration="1s" data-wow-delay="0.1s">
                                    <div class="image-wrap">
                                        <a href="agents-details.html">
                                            <img class="lazyload" data-src="images/section/agent-item-6.jpg"
                                                src={agent2} alt="" />
                                        </a>
                                        <ul class="tf-social style-3">
                                            <li><a href="#"><i class="icon-fb"></i></a></li>
                                            <li><a href="#"><i class="icon-X"></i></a></li>
                                            <li><a href="#"><i class="icon-linked"></i></a></li>
                                            <li><a href="#"><i class="icon-ins"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content justify-center">
                                        <div class="author text-center">
                                            <h5 class="name lh-30"><a href="agents-details.html">Leslie
                                                    Alexander</a></h5>
                                            <p class="text-2 lh-18">Sale agent</p>
                                        </div>
                                    </div>
                                    <div class="wrap-btn-icon">
                                        <a href="#" class="btn-icon phone hover-tooltip style-2"><i
                                                class="icon-phone-3"></i><span class="tooltip ">Call</span></a>
                                        <a href="#" class="btn-icon message hover-tooltip style-2"><i
                                                class="icon-letter"> </i><span
                                                class="tooltip ">Message</span></a>
                                    </div>
                                </div>
                                </AnimatedContent>
                            </div>
                            <div class="">
                            <AnimatedContent
                                    distance={10}
                                    direction="vertical"
                                    reverse={false}
                                    config={{ tension: 70, friction: 30 }}
                                    initialOpacity={0.2}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                <div class="agent-item hover-img style-2 animate__fadeInUp animate__animated"
                                    data-wow-duration="1s" data-wow-delay="0.2s">
                                    <div class="image-wrap">
                                        <a href="agents-details.html">
                                            <img class="lazyload" data-src="images/section/agent-item-7.jpg"
                                                src={agent3} alt="" />
                                        </a>
                                        <ul class="tf-social style-3">
                                            <li><a href="#"><i class="icon-fb"></i></a></li>
                                            <li><a href="#"><i class="icon-X"></i></a></li>
                                            <li><a href="#"><i class="icon-linked"></i></a></li>
                                            <li><a href="#"><i class="icon-ins"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content justify-center">
                                        <div class="author text-center">
                                            <h5 class="name lh-30"><a href="agents-details.html">Leslie
                                                    Alexander</a></h5>
                                            <p class="text-2 lh-18">Sale agent</p>
                                        </div>
                                    </div>
                                    <div class="wrap-btn-icon">
                                        <a href="#" class="btn-icon phone hover-tooltip style-2"><i
                                                class="icon-phone-3"></i><span class="tooltip ">Call</span></a>
                                        <a href="#" class="btn-icon message hover-tooltip style-2"><i
                                                class="icon-letter"> </i><span
                                                class="tooltip ">Message</span></a>
                                    </div>
                                </div>
                                </AnimatedContent>
                            </div>
                            <div class="">
                            <AnimatedContent
                                    distance={10}
                                    direction="vertical"
                                    reverse={false}
                                    config={{ tension: 70, friction: 30 }}
                                    initialOpacity={0.2}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                <div class="agent-item hover-img style-2 animate__fadeInUp animate__animated"
                                    data-wow-duration="1s" data-wow-delay="0.3s">
                                    <div class="image-wrap">
                                        <a href="agents-details.html">
                                            <img class="lazyload" data-src="images/section/agent-item-8.jpg"
                                                src={agent4} alt="" />
                                        </a>
                                        <ul class="tf-social style-3">
                                            <li><a href="#"><i class="icon-fb"></i></a></li>
                                            <li><a href="#"><i class="icon-X"></i></a></li>
                                            <li><a href="#"><i class="icon-linked"></i></a></li>
                                            <li><a href="#"><i class="icon-ins"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content justify-center">
                                        <div class="author text-center">
                                            <h5 class="name lh-30"><a href="agents-details.html">Leslie
                                                    Alexander</a></h5>
                                            <p class="text-2 lh-18">Sale agent</p>
                                        </div>
                                    </div>
                                    <div class="wrap-btn-icon">
                                        <a href="#" class="btn-icon phone hover-tooltip style-2"><i
                                                class="icon-phone-3"></i><span class="tooltip ">Call</span></a>
                                        <a href="#" class="btn-icon message hover-tooltip style-2"><i
                                                class="icon-letter"> </i><span
                                                class="tooltip ">Message</span></a>
                                    </div>
                                </div>
                                </AnimatedContent>
                            </div>
                        </div>
                        <div class="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block mb-20"></div>
                    </div>
                    <p class="text-center text-1 mb-48">Explore Property agents are here to help with all your
                        buying, renting and selling goals. 
                        Find the home of your dreams with an expert you can trust. <a href="#">Let’s chat</a>
                    </p>
                    <a href="#" class="tf-btn bg-color-primary pd-3 fw-6 mx-auto">Find your location agent <i
                            class="icon-MagnifyingGlass"></i></a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Localagent5
