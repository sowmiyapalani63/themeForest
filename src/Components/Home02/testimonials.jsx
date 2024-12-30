import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../Styles/css/animate.min.css';
import '../../Styles/css/bootstrap.css';
import '../../Styles/css/styles.css';
import '../../Styles/css/odometer.min.css';
import '../../Assests/icons/icomoon/style.css';
import testimonials2 from '../../Assests/images/avatar/testimonials-2.jpg';
import testimonials4 from '../../Assests/images/avatar/testimonials-4.jpg';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            img: testimonials2,
            description:
                'Phasellus efficitur dictum urna, non elementum mauris mollis a. Duis lacinia arcu ac lorem ultricies porta. Maecenas eleifend malesuada egestas. In eu eros hendrerit, pharetra justo id, blandit orci.',
            name: 'Ronald Richards',
            role: 'CEO Themesflat',
        },
        {
            id: 2,
            img: testimonials4,
            description:
                'Proin auctor, mauris at tristique ullamcorper, nunc nisi sagittis velit, eget blandit dolor arcu sed ante. Fusce euismod varius massa, id viverra nisl semper ut. Aliquam felis eros, eleifend non faucibus at.',
            name: 'Courtney Henry',
            role: 'CEO Themesflat',
        },
        {
            id: 3,
            img: testimonials2,
            description:
                'Phasellus efficitur dictum urna, non elementum mauris mollis a. Duis lacinia arcu ac lorem ultricies porta. Maecenas eleifend malesuada egestas. In eu eros hendrerit, pharetra justo id, blandit orci.',
            name: 'Ronald Richards',
            role: 'CEO Themesflat',
        },
        {
            id: 4,
            img: testimonials4,
            description:
                'Sed eget nibh eros. Phasellus pharetra ac leo et auctor. Donec libero dui, blandit id nulla laoreet, pellentesque egestas ante. Etiam mollis tincidunt elit, sit amet sodales tellus finibus ut. Orci varius natoque.',
            name: 'Annette Black',
            role: 'CEO Themesflat',
        },
    ];

    return (
        <div className="section-testimonials tf-spacing-1">
            <div className="tf-container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading-section text-center mb-48">
                            <h2 className="title text-anime-wave">Clients Testimonials</h2>
                            <p
                                className="text-1 wow animate__fadeInUp animate__animated"
                                data-wow-duration="1.5s"
                                data-wow-delay="0s"
                            >
                                Thousands of luxury home enthusiasts just like you visit our website.
                            </p>
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="swiper sw-testimonials style-pagination"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="wg-testimonial text-center">
                                        <div className="avatar">
                                            <img src={testimonial.img} alt={testimonial.name} />
                                        </div>
                                        <p className="text-1 description">{testimonial.description}</p>
                                        <div className="ratings justify-center">
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                        </div>
                                        <div className="author">
                                            <h6 className="name">
                                                <a href="#">{testimonial.name}</a>
                                            </h6>
                                            <p className="text-2">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="sw-wrap-btn">
                            <div className="swiper-button-prev sw-button testimonials-prev">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19 12H5"
                                        stroke="#5C5E61"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 5L5 12L12 19"
                                        stroke="#5C5E61"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="sw-pagination sw-pagination-testimonials text-center " ></div>
                            <div className="swiper-button-next sw-button testimonials-next">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 12H19"
                                        stroke="#5C5E61"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 5L19 12L12 19"
                                        stroke="#5C5E61"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
