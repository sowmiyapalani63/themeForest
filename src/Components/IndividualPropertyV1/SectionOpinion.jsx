import React from 'react'
import boxhouse18 from '../../Assests/images/section/box-house-18.jpg'
import boxhouse15 from '../../Assests/images/section/box-house-15.jpg'
import boxhouse21 from '../../Assests/images/section/box-house-21.jpg'

const SectionOpinion = () => {
  return (
    <div>
         <section className="section-similar-properties tf-spacing-3 ">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading-section mb-32">
                                <h2 className="title ">Similar Properties</h2>
                            </div>
                            <div className="swiper style-pagination tf-sw-mobile-1" data-screen="991" data-preview="1"
                                data-space="15">
                                <div className="swiper-wrapper tf-layout-mobile-xl  lg-col-3 wrap-agent wow fadeInUp"
                                    data-wow-delay=".2s">
                                    <div className="swiper-slide">
                                        <div className="box-house hover-img">
                                            <div className="image-wrap">
                                                <a href="property-detail-v1.html">
                                                    <img className="lazyload" data-src={boxhouse21}
                                                        src={boxhouse21} alt=""/>
                                                </a>
                                                <ul className="box-tag flex gap-8 ">
                                                    <li className="flat-tag text-4 bg-main fw-6 text-white">Featured</li>
                                                    <li className="flat-tag text-4 bg-3 fw-6 text-white">For Sale</li>
                                                </ul>
                                                <div className="list-btn flex gap-8 ">
                                                    <a href="#" className="btn-icon save hover-tooltip"><i
                                                            className="icon-save"></i>
                                                        <span className="tooltip">Add Favorite</span>
                                                    </a>
                                                    <a href="#" className="btn-icon find hover-tooltip"><i
                                                            className="icon-find-plus"></i>
                                                        <span className="tooltip">Quick View</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h5 className="title">
                                                    <a href="property-detail-v1.html">Elegant studio flat</a>

                                                </h5>
                                                <p className="location text-1 flex items-center gap-8">
                                                    <i className="icon-location"></i> 102 Ingraham St, Brooklyn, NY 11237
                                                </p>
                                                <ul className="meta-list flex">
                                                    <li className="text-1 flex"><span>3</span>Beds</li>
                                                    <li className="text-1 flex"><span>3</span>Baths</li>
                                                    <li className="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div className="bot flex justify-between items-center">
                                                    <h5 className="price">
                                                        $8.600
                                                    </h5>
                                                    <div className="wrap-btn flex">
                                                        <a href="#" className="compare flex gap-8 items-center text-1"><i
                                                                className="icon-compare"></i>Compare
                                                        </a>
                                                        <a href="property-detail-v1.html"
                                                            className="tf-btn style-border pd-4">Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="box-house hover-img">
                                            <div className="image-wrap">
                                                <a href="property-detail-v1.html">
                                                    <img className="lazyload" data-src={boxhouse18}
                                                        src={boxhouse18} alt=""/>
                                                </a>
                                                <ul className="box-tag flex gap-8 ">
                                                    <li className="flat-tag text-4 bg-main fw-6 text-white">Featured</li>
                                                    <li className="flat-tag text-4 bg-3 fw-6 text-white">For Sale</li>
                                                </ul>
                                                <div className="list-btn flex gap-8 ">
                                                    <a href="#" className="btn-icon save hover-tooltip"><i
                                                            className="icon-save"></i>
                                                        <span className="tooltip">Add Favorite</span>
                                                    </a>
                                                    <a href="#" className="btn-icon find hover-tooltip"><i
                                                            className="icon-find-plus"></i>
                                                        <span className="tooltip">Quick View</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h5 className="title">
                                                    <a href="property-detail-v1.html">Elegant studio flat</a>

                                                </h5>
                                                <p className="location text-1 flex items-center gap-8">
                                                    <i className="icon-location"></i> 102 Ingraham St, Brooklyn, NY 11237
                                                </p>
                                                <ul className="meta-list flex">
                                                    <li className="text-1 flex"><span>3</span>Beds</li>
                                                    <li className="text-1 flex"><span>3</span>Baths</li>
                                                    <li className="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div className="bot flex justify-between items-center">
                                                    <h5 className="price">
                                                        $8.600
                                                    </h5>
                                                    <div className="wrap-btn flex">
                                                        <a href="#" className="compare flex gap-8 items-center text-1"><i
                                                                className="icon-compare"></i>Compare
                                                        </a>
                                                        <a href="property-detail-v1.html"
                                                            className="tf-btn style-border pd-4">Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="box-house hover-img">
                                            <div className="image-wrap">
                                                <a href="property-detail-v1.html">
                                                    <img className="lazyload" data-src={boxhouse15 }
                                                        src={boxhouse15 } alt=""/>
                                                </a>
                                                <ul className="box-tag flex gap-8 ">
                                                    <li className="flat-tag text-4 bg-main fw-6 text-white">Featured</li>
                                                    <li className="flat-tag text-4 bg-3 fw-6 text-white">For Sale</li>
                                                </ul>
                                                <div className="list-btn flex gap-8 ">
                                                    <a href="#" className="btn-icon save hover-tooltip"><i
                                                            className="icon-save"></i>
                                                        <span className="tooltip">Add Favorite</span>
                                                    </a>
                                                    <a href="#" className="btn-icon find hover-tooltip"><i
                                                            className="icon-find-plus"></i>
                                                        <span className="tooltip">Quick View</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h5 className="title">
                                                    <a href="property-detail-v1.html">Elegant studio flat</a>

                                                </h5>
                                                <p className="location text-1 flex items-center gap-8">
                                                    <i className="icon-location"></i> 102 Ingraham St, Brooklyn, NY 11237
                                                </p>
                                                <ul className="meta-list flex">
                                                    <li className="text-1 flex"><span>3</span>Beds</li>
                                                    <li className="text-1 flex"><span>3</span>Baths</li>
                                                    <li className="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div className="bot flex justify-between items-center">
                                                    <h5 className="price">
                                                        $8.600
                                                    </h5>
                                                    <div className="wrap-btn flex">
                                                        <a href="#" className="compare flex gap-8 items-center text-1"><i
                                                                className="icon-compare"></i>Compare
                                                        </a>
                                                        <a href="property-detail-v1.html"
                                                            className="tf-btn style-border pd-4">Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block mt-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default SectionOpinion