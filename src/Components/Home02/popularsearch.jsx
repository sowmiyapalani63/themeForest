import React from 'react';
import '../../Styles/css/animate.min.css';
import '../../Styles/css/bootstrap.css';
import '../../Styles/css/styles.css';
import '../../Styles/css/odometer.min.css';
import '../../Assests/icons/icomoon/style.css';
import propertiesData from '../../lib/Constants/data.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Popularsearch = () => {
  return (
    <section className="section-popular-searches tf-spacing-1">
      <div className="tf-container md">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title text-anime-wave">Popular Searches</h2>
              <p
                className="text-1 animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                Thousands of luxury home enthusiasts just like you visit our website.
              </p>
            </div>
            <div className="widget-tabs style-2">
              <ul className="widget-menu-tab mb-48 overflow-x-auto">
                <li className="item-title active hover-tooltip">
                  Michigan
                  <span className="tooltip">10 Listing</span>
                </li>
                <li className="item-title hover-tooltip">
                  Oklahome
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
                            <span>{property.beds}</span>Beds
                          </li>
                          <li className="text-1 flex">
                            <span>{property.baths}</span>Baths
                          </li>
                          <li className="text-1 flex">
                            <span>{property.sqft}</span>Sqft
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
