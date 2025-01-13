import React from 'react'
import '../../Styles/css/animate.min.css';
import '../../Styles/css/bootstrap.css';
import '../../Styles/css/styles.css';
import '../../Styles/css/odometer.min.css';
import '../../Assests/icons/icomoon/style.css';
import agent1 from '../../Assests/images/section/agent-item-1.jpg'
import agent2 from '../../Assests/images/section/agent-item-2.jpg'
import agent3 from '../../Assests/images/section/agent-item-3.jpg'
import agent4 from '../../Assests/images/section/agent-item-4.jpg'
import SplitText from "../Common/SplitText";
import AnimatedContent from "../Common/AnimatedContent";

const Localagent = () => {
    const handleAnimationComplete = () => {
        console.log("H2 title has animated!");
    };
    return (
        <section class="section-local-agent tf-spacing-1">
            <div class="tf-container">
                <div class="row">
                    <div class="col-12">
                        <div class="heading-section mb-48 text-center">
                            <SplitText
                                text="Choose Your Local Agent"
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo
                                </p>
                            </AnimatedContent>
                        </div>
                        <div class="tf-grid-layout-2 md-col-4 mb-48">
                            <div class="agent-item hover-img">
                                <div class="image-wrap">
                                    <a href="agents-details.html">
                                        <img class="lazyload" data-src="images/section/agent-item-1.jpg"
                                            src={agent1} alt="" />
                                    </a>
                                    <ul class="tf-social style-3">
                                        <li><a href="#"><i class="icon-fb"></i></a></li>
                                        <li><a href="#"><i class="icon-X"></i></a></li>
                                        <li><a href="#"><i class="icon-linked"></i></a></li>
                                        <li><a href="#"><i class="icon-ins"></i></a></li>
                                    </ul>
                                </div>
                                <div class="content">
                                    <div class="author">
                                        <h5 class="name lh-30"><a href="agents-details.html">Leslie
                                            Alexander</a></h5>
                                        <p class="text-2 lh-18">Sale agent</p>
                                    </div>
                                    <div class="wrap-btn-icon">
                                        <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                                        <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="agent-item hover-img ">
                                <div class="image-wrap">
                                    <a href="agents-details.html">
                                        <img class="lazyload" data-src="images/section/agent-item-2.jpg"
                                            src={agent2} alt="" />
                                    </a>
                                    <ul class="tf-social style-3">
                                        <li><a href="#"><i class="icon-fb"></i></a></li>
                                        <li><a href="#"><i class="icon-X"></i></a></li>
                                        <li><a href="#"><i class="icon-linked"></i></a></li>
                                        <li><a href="#"><i class="icon-ins"></i></a></li>
                                    </ul>
                                </div>
                                <div class="content">
                                    <div class="author">
                                        <h5 class="name lh-30"><a href="agents-details.html">Leslie
                                            Alexander</a></h5>
                                        <p class="text-2 lh-18">Sale agent</p>
                                    </div>
                                    <div class="wrap-btn-icon">
                                        <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                                        <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="agent-item hover-img ">
                                <div class="image-wrap">
                                    <a href="agents-details.html">
                                        <img class="lazyload" data-src="images/section/agent-item-3.jpg"
                                            src={agent3} alt="" />
                                    </a>
                                    <ul class="tf-social style-3">
                                        <li><a href="#"><i class="icon-fb"></i></a></li>
                                        <li><a href="#"><i class="icon-X"></i></a></li>
                                        <li><a href="#"><i class="icon-linked"></i></a></li>
                                        <li><a href="#"><i class="icon-ins"></i></a></li>
                                    </ul>
                                </div>
                                <div class="content">
                                    <div class="author">
                                        <h5 class="name lh-30"><a href="agents-details.html">Leslie
                                            Alexander</a></h5>
                                        <p class="text-2 lh-18">Sale agent</p>
                                    </div>
                                    <div class="wrap-btn-icon">
                                        <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                                        <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="agent-item hover-img ">
                                <div class="image-wrap">
                                    <a href="agents-details.html">
                                        <img class="lazyload" data-src="images/section/agent-item-4.jpg"
                                            src={agent4} alt="" />
                                    </a>
                                    <ul class="tf-social style-3">
                                        <li><a href="#"><i class="icon-fb"></i></a></li>
                                        <li><a href="#"><i class="icon-X"></i></a></li>
                                        <li><a href="#"><i class="icon-linked"></i></a></li>
                                        <li><a href="#"><i class="icon-ins"></i></a></li>
                                    </ul>
                                </div>
                                <div class="content">
                                    <div class="author">
                                        <h5 class="name lh-30"><a href="agents-details.html">Leslie
                                            Alexander</a></h5>
                                        <p class="text-2 lh-18">Sale agent</p>
                                    </div>
                                    <div class="wrap-btn-icon">
                                        <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                                        <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="text-center text-1 mb-48">Explore Property agents are here to help with all your
                            buying, renting and selling goals.
                            <br />Find the home of your dreams with an expert you can trust. <a href="#">Let’s chat</a>
                        </p>
                        <a href="#" class="tf-btn bg-color-primary pd-3 fw-6 mx-auto">Find your location agent <i
                            class="icon-MagnifyingGlass"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Localagent
