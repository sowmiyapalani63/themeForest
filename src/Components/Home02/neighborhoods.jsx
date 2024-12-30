import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../Styles/css/animate.min.css';
import '../../Styles/css/bootstrap.css';
import '../../Styles/css/styles.css';
import '../../Styles/css/odometer.min.css';
import '../../Assests/icons/icomoon/style.css';
import location9 from '../../Assests/images/section/location-9.jpg';
import location16 from '../../Assests/images/section/location-16.jpg';

const Neighborhoods = () => {
    const neighborhoods = [
        { id: 1, img: location9, title: 'New York', properties: '2,491 Properties' },
        { id: 2, img: location16, title: 'Los Angeles', properties: '1,325 Properties' },
        { id: 3, img: location9, title: 'Chicago', properties: '998 Properties' },
        { id: 4, img: location16, title: 'San Francisco', properties: '786 Properties' },
        { id: 5, img: location9, title: 'Seattle', properties: '412 Properties' },
    ];

    return (
        <section className="section-neighborhoods style-2">
            <div className="tf-container full">
                <div className="row">
                    <div className="col-12">
                        <div className="heading-section mb-46 text-center">
                            <h2 className="title text-anime-wave">Explore The Neighborhoods</h2>
                            <p
                                className="text-1  animate__fadeInUp animate__animated"
                                data-wow-duration="1.5s"
                                data-wow-delay="0s"
                            >
                                Discover the best properties in the most iconic neighborhoods.
                            </p>
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            slidesPerView={4}
                            spaceBetween={12}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                            }}
                            className="swiper sw-layout-4-v2"
                        >
                            {neighborhoods.map((neighborhood) => (
                                <SwiperSlide key={neighborhood.id}>
                                    <div className="box-location hover-img">
                                        <div className="image-wrap">
                                            <a href="#">
                                                <img src={neighborhood.img} alt={neighborhood.title} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <h6 className="text-white">{neighborhood.title}</h6>
                                            <a href="#" className="text-1 tf-btn style-border pd-23 text-white">
                                                {neighborhood.properties} <i className="icon-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="sw-wrap-btn">
                            <div className="swiper-button-prev sw-button layout-4-prev">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 12H5" stroke="#5C5E61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 5L5 12L12 19" stroke="#5C5E61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="sw-pagination sw-pagination-layout-4 text-center"></div>
                            <div className="swiper-button-next sw-button layout-4-next">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19" stroke="#5C5E61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 5L19 12L12 19" stroke="#5C5E61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Neighborhoods;
