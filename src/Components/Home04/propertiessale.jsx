import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import secbox from '../../Assests/images/section/section-box-team.jpg'
import SplitText from "../Common/SplitText";
import AnimatedContent from "../Common/AnimatedContent";

const Propertiessale = () => {
  const cardData = [
    {
      title: "Elegant studio flat",
      location: "102 Ingraham St, Brooklyn, NY 11237",
      beds: 3,
      baths: 3,
      sqft: "4,043",
      price: "$8,600",
      image: "images/section/box-house.jpg",
      tags: ["Featured", "For Sale"],
    },
    // Duplicate data for demonstration (you can replace it with real data)
    {
      title: "Elegant studio flat",
      location: "102 Ingraham St, Brooklyn, NY 11237",
      beds: 3,
      baths: 3,
      sqft: "4,043",
      price: "$8,600",
      image: "images/section/box-house.jpg",
      tags: ["Featured", "For Sale"],
    },
    {
      title: "Elegant studio flat",
      location: "102 Ingraham St, Brooklyn, NY 11237",
      beds: 3,
      baths: 3,
      sqft: "4,043",
      price: "$8,600",
      image: "images/section/box-house.jpg",
      tags: ["Featured", "For Sale"],
    },
  ];
  const handleAnimationComplete = () => {
    console.log("H2 title has animated!");
};

  return (
    <section className="section-best-sale tf-spacing-1">
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
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                480: { slidesPerView: 1 },
              }}
            >
              {cardData.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="box-house hover-img">
                    <div className="image-wrap">
                      <a href="property-detail-v1.html">
                        <img
                          className="lazyload"
                          data-src={card.image}
                          src={secbox}
                          alt={card.title}
                        />
                      </a>
                      <ul className="box-tag flex gap-8">
                        {card.tags.map((tag, idx) => (
                          <li
                            key={idx}
                            className={`flat-tag text-4 ${
                              tag === "Featured" ? "bg-main" : "bg-3"
                            } fw-6 text-white`}
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
                      <h5 className="title">
                        <a href="property-detail-v1.html">{card.title}</a>
                      </h5>
                      <p className="location text-1 flex items-center gap-6">
                        <i className="icon-location"></i> {card.location}
                      </p>
                      <ul className="meta-list flex">
                        <li className="text-1 flex">
                          <span>{card.beds}</span>Beds
                        </li>
                        <li className="text-1 flex">
                          <span>{card.baths}</span>Baths
                        </li>
                        <li className="text-1 flex">
                          <span>{card.sqft}</span>Sqft
                        </li>
                      </ul>
                      <div className="bot flex justify-between items-center">
                        <h5 className="price">{card.price}</h5>
                        <div className="wrap-btn flex">
                          <a
                            href="#"
                            className="compare flex gap-8 items-center text-1"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.6922 14.1922L14.1922 16.6922..."
                                fill="#5C5E61"
                              />
                            </svg>
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
    </section>
  );
};

export default Propertiessale;
