import React, { useState } from 'react';
import '../../Styles/css/animate.min.css';
import '../../Styles/css/bootstrap.css';
import '../../Styles/css/styles.css';
import '../../Styles/css/odometer.min.css';
import '../../Assests/icons/icomoon/style.css';
import propertiesData from '../../lib/Constants/data.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import SplitText from "../Common/SplitText";
import AnimatedContent from "../Common/AnimatedContent";

const Popularsearch = () => {
  const [themeColor, setThemeColor] = useState("#f1913d");

  const updateThemeColor = (color) => {
    document.documentElement.style.setProperty("--theme-primary", color);
    setThemeColor(color);
  };

  const handleAnimationComplete = () => {
    console.log("H2 title has animated!");
  };

  return (
    <section className="section-popular-searches tf-spacing-1">
      <div className="tf-container md">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <SplitText
                text="Popular Searches"
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
                <p className="text-1 animate__fadeInUp animate__animated">
                Thousands of luxury home enthusiasts just like you visit our website.
                </p>
              </AnimatedContent>
            </div>
            <div className="widget-tabs style-2">
              <ul className="widget-menu-tab mb-48 overflow-x-auto">
                <li className="item-title active hover-tooltip">
                  Michigan
                  <span className="tooltip">10 Listing</span>
                </li>
                <li className="item-title hover-tooltip">
                  Oklahoma
                  <span className="tooltip">9 Listing</span>
                </li>
                <li className="item-title hover-tooltip">
                  Kentucky
                  <span className="tooltip">10 Listing</span>
                </li>
                <li className="item-title hover-tooltip">
                  Nebraska
                  <span className="tooltip">20 Listing</span>
                </li>
                <li className="item-title hover-tooltip">
                  Colorado
                  <span className="tooltip">9 Listing</span>
                </li>
              </ul>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {propertiesData.properties.map((property, index) => (
                  <SwiperSlide key={index}>
                    <div className="box-house hover-img">
                      <div className="image-wrap">
                        <a href="property-detail-v1.html">
                          <img
                            className="lazyload"
                            src={require(`../../Assests/images/section/${property.image}`)}
                            alt={property.title}
                          />
                        </a>
                        <ul className="box-tag flex gap-8">
                          {property.statusTags.map((tag, idx) => (
                            <li
                              key={idx}
                              className={`flat-tag text-4 fw-6 text-white bg-${idx + 1}`}
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                        <div className="list-btn flex gap-8">
                          <a href="#" className="btn-icon save hover-tooltip">
                            <i className="icon-save"></i>
                            <span className="tooltip">Add Favorite</span>
                          </a>
                          <a href="#" className="btn-icon find hover-tooltip">
                            <i className="icon-find-plus"></i>
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="title text-start">
                          <a href="property-detail-v1.html">{property.title}</a>
                        </h5>
                        <p className="location text-1 flex items-center gap-8">
                          <i className="icon-location"></i> {property.location}
                        </p>
                        <ul className="meta-list flex">
                          <li className="text-1 flex">
                            <span>{property.beds}</span> Beds
                          </li>
                          <li className="text-1 flex">
                            <span>{property.baths}</span> Baths
                          </li>
                          <li className="text-1 flex">
                            <span>{property.sqft}</span> Sqft
                          </li>
                        </ul>
                        <div className="bot flex justify-between items-center">
                          <h5 className="price">{property.price}</h5>
                          <div className="wrap-btn flex">
                            <a
                              href="#"
                              className="compare flex gap-8 items-center text-1"
                            >
                              Compare
                            </a>
                            <a
                              href="property-detail-v1.html"
                              className="tf-btn style-border pd-4"
                            >
                              Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popularsearch;
