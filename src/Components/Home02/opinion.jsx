import React from 'react';
import '../../Styles/css/animate.min.css';
import '../../Styles/css/bootstrap.css';
import '../../Styles/css/styles.css';
import '../../Styles/css/odometer.min.css';
import '../../Assests/icons/icomoon/style.css';
import bloggrid1 from '../../Assests/images/blog/blog-grid-1.jpg'
import SplitText from "../Common/SplitText";
import AnimatedContent from "../Common/AnimatedContent";

const Opinion = () => {
    const handleAnimationComplete = () => {
        console.log("H2 title has animated!");
    };
    return (
        <section className="section-opinion tf-spacing-1">
            <div className="tf-container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading-section text-center mb-48">
                            <SplitText
                                text="Insight & Opinion"
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
                        <div className="tf-sw-latest" data-preview="3" data-tablet="2" data-mobile-sm="2" data-mobile="1" data-space-lg="40" data-space-md="20" data-space="15">
                            <div className="row">
                                {/* Article 1 */}
                                <div className="col-md-4">
                                    <div className="blog-article-item style-2 hover-img">
                                        <div className="image-wrap">
                                            <a href="blog-details.html">
                                                <img className="lazyload" data-src="images/blog/blog-grid-1.jpg" src={bloggrid1} alt="Article 1" />
                                            </a>
                                            <div className="box-tag">
                                                <div className="tag-item text-4 text-white fw-6">Real Estate</div>
                                            </div>
                                        </div>
                                        <div className="article-content text-start">
                                            <div className="time">Dec 15, 2024</div>
                                            <h3 className="article-title text-start"><a href="blog-details.html">5 Tips to Increase Property Value</a></h3>
                                            <p>Learn how to maximize your investment and increase the value of your property effortlessly.</p>
                                        </div>
                                        <div>
                                            <a href="blog-details.html" class="tf-btn-link">
                                                <span>
                                                    Read More
                                                </span> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_2450_13860)">
                                                        <path d="M10.0013 18.3334C14.6037 18.3334 18.3346 14.6024 18.3346 10C18.3346 5.39765 14.6037 1.66669 10.0013 1.66669C5.39893 1.66669 1.66797 5.39765 1.66797 10C1.66797 14.6024 5.39893 18.3334 10.0013 18.3334Z" stroke="#F1913D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M6.66797 10H13.3346" stroke="#F1913D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10 13.3334L13.3333 10L10 6.66669" stroke="#F1913D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_2450_13860">
                                                            <rect width="20" height="20" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Article 2 */}
                                <div className="col-md-4">
                                    <div className="blog-article-item style-2 hover-img">
                                        <div className="image-wrap">
                                            <a href="blog-details.html">
                                                <img className="lazyload" data-src="images/blog/blog-grid-2.jpg" src={bloggrid1} alt="Article 2" />
                                            </a>
                                            <div className="box-tag">
                                                <div className="tag-item text-4 text-white fw-6">Interior Design</div>
                                            </div>
                                        </div>
                                        <div className="article-content text-start">
                                            <div className="time">Dec 20, 2024</div>
                                            <h3 className="article-title text-start"><a href="blog-details.html">Top 10 Luxury Home Designs</a></h3>
                                            <p>Explore the latest trends in luxury home designs for modern living.</p>
                                        </div>
                                        <div>
                                            <a href="blog-details.html" class="tf-btn-link">
                                                <span>
                                                    Read More
                                                </span> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_2450_13860)">
                                                        <path d="M10.0013 18.3334C14.6037 18.3334 18.3346 14.6024 18.3346 10C18.3346 5.39765 14.6037 1.66669 10.0013 1.66669C5.39893 1.66669 1.66797 5.39765 1.66797 10C1.66797 14.6024 5.39893 18.3334 10.0013 18.3334Z" stroke="#F1913D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M6.66797 10H13.3346" stroke="#F1913D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10 13.3334L13.3333 10L10 6.66669" stroke="#F1913D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_2450_13860">
                                                            <rect width="20" height="20" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Article 3 */}
                                <div className="col-md-4">
                                    <div className="blog-article-item style-2 hover-img">
                                        <div className="image-wrap">
                                            <a href="blog-details.html">
                                                <img className="lazyload" data-src="images/blog/blog-grid-3.jpg" src={bloggrid1} alt="Article 3" />
                                            </a>
                                            <div className="box-tag">
                                                <div className="tag-item text-4 text-white fw-6">Market Insights</div>
                                            </div>
                                        </div>
                                        <div className="article-content text-start">
                                            <div className="time">Dec 25, 2024</div>
                                            <h3 className="article-title text-start"><a href="blog-details.html">Real Estate Market Predictions 2025</a></h3>
                                            <p>Discover key trends that will shape the real estate market in the coming year.</p>
                                        </div>
                                        <div>
                                            <a href="blog-details.html" class="tf-btn-link">
                                                <span>
                                                    Read More
                                                </span> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_2450_13860)">
                                                        <path d="M10.0013 18.3334C14.6037 18.3334 18.3346 14.6024 18.3346 10C18.3346 5.39765 14.6037 1.66669 10.0013 1.66669C5.39893 1.66669 1.66797 5.39765 1.66797 10C1.66797 14.6024 5.39893 18.3334 10.0013 18.3334Z" stroke="#F1913D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M6.66797 10H13.3346" stroke="#F1913D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10 13.3334L13.3333 10L10 6.66669" stroke="#F1913D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_2450_13860">
                                                            <rect width="20" height="20" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Opinion;
