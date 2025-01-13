import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import SplitText from "../Common/SplitText";
import AnimatedContent from "../Common/AnimatedContent";

const Categories = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 576 });

    const categories = [
        { iconClass: "icon-apartment1", name: "Apartment", listings: 476 },
        { iconClass: "icon-villa", name: "Villa", listings: 476 },
        { iconClass: "icon-studio", name: "Studio", listings: 476 },
        { iconClass: "icon-apartment1", name: "Apartment", listings: 476 },
        { iconClass: "icon-villa", name: "Villa", listings: 476 },
        { iconClass: "icon-studio", name: "Studio", listings: 476 },
    ];

    const handleAnimationComplete = () => {
        console.log("H2 title has animated!");
    };

    return (
        <section className="section-categories tf-spacing-1">
            <div className="tf-container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading-section text-center mb-48">

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
                        <div className="gap-10px">
                            {isSmallScreen ? (
                                <Swiper
                                    modules={[Pagination]}
                                    spaceBetween={15}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                >
                                    {categories.map((category, index) => (
                                        <SwiperSlide key={index}>
                                            <a href="#" className="categories-item style-2">
                                                <div className="icon-box">
                                                    <i className={`icon ${category.iconClass}`}></i>
                                                </div>
                                                <div className="content">
                                                    <h5 className="mb-10">{category.name}</h5>
                                                    <p>
                                                        <svg
                                                            width="18"
                                                            height="18"
                                                            viewBox="0 0 18 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M11.25 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V5.25L11.25 1.5Z"
                                                                stroke="#5C5E61"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M10.5 1.5V4.5C10.5 4.89782 10.658 5.27936 10.9393 5.56066C11.2206 5.84196 11.6022 6 12 6H15"
                                                                stroke="#5C5E61"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M7.5 6.75H6"
                                                                stroke="#5C5E61"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M12 9.75H6"
                                                                stroke="#5C5E61"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M12 12.75H6"
                                                                stroke="#5C5E61"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        {category.listings} listings for sale
                                                    </p>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                // Grid layout for larger screens
                                <div className="tf-layout-mobile-sm sm-col-2 xl-col-4 lg-col-3">
                                    {categories.map((category, index) => (
                                        <div key={index} className="">
                                            <a href="#" className="categories-item style-2">
                                                <div className="icon-box">
                                                    <i className={`icon ${category.iconClass}`}></i>
                                                </div>
                                                <div className="content">
                                                    <h5 className="mb-10">{category.name}</h5>
                                                    <p>
                                                        <svg
                                                            width="18"
                                                            height="18"
                                                            viewBox="0 0 18 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M11.25 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V5.25L11.25 1.5Z"
                                                                stroke="#5C5E61"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M10.5 1.5V4.5C10.5 4.89782 10.658 5.27936 10.9393 5.56066C11.2206 5.84196 11.6022 6 12 6H15"
                                                                stroke="#5C5E61"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M7.5 6.75H6"
                                                                stroke="#5C5E61"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M12 9.75H6"
                                                                stroke="#5C5E61"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M12 12.75H6"
                                                                stroke="#5C5E61"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        {category.listings} listings for sale
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
