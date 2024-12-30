import React from 'react'
import houselist1 from '../../Assests/images/section/box-house-list-1.jpg'
import houselist2 from '../../Assests/images/section/box-house-list-2.jpg'
import houselist3 from '../../Assests/images/section/box-house-list-3.jpg'
import houselist4 from '../../Assests/images/section/box-house-list-4.jpg'

const HouseListing = () => {
  return (
    <section class="section-listing tf-spacing-1">
    <div class="tf-container">
        <div class="row">
            <div class="col-12">
                <div class="heading-section text-center mb-48">
                    <h2 class="title text-anime-wave">Open Houses Listings</h2>
                    <p class="text-1 wow animate__fadeInUp animate__animated" data-wow-duration="1.5s"
                        data-wow-delay="0s">Thousands of luxury home enthusiasts just like you
                        visit our website.
                    </p>
                </div>
                <div class="swiper style-pagination tf-sw-mobile" data-screen="992" data-preview="1"
                    data-space="15">
                    <div class="swiper-wrapper tf-layout-mobile-lg lg-col-2 ">
                        <div class="swiper-slide">
                            <div class="box-house hover-img style-list ">
                                <div class="image-wrap">
                                    <a href="property-detail-v1.html">
                                        <img class="lazyload" data-src={houselist1}
                                            src={houselist1} alt="" />
                                    </a>
                                    <ul class="box-tag flex gap-8 ">
                                        <li class="flat-tag text-4 bg-main fw-6 text-white">For Sale</li>
                                    </ul>
                                    <div class="list-btn flex gap-8 ">
                                        <a href="#" class="btn-icon save hover-tooltip"><i
                                                class="icon-save"></i>
                                            <span class="tooltip">Add Favorite</span>
                                        </a>
                                        <a href="#" class="btn-icon find hover-tooltip"><i
                                                class="icon-find-plus"></i>
                                            <span class="tooltip">Quick View</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="content">
                                    <h5 class="title">
                                        <a href="property-detail-v1.html"> Elegant studio flat</a>
                                    </h5>
                                    <p class="location text-1 line-clamp-1 ">
                                        <i class="icon-location"></i> Los Angeles, California 91604
                                    </p>
                                    <ul class="meta-list flex">
                                        <li class="meta-item">
                                            <div class="text-9 flex"><i
                                                    class="icon-bed"></i>Beds<span>4</span>
                                            </div>
                                            <div class="text-9 flex"><i
                                                    class="icon-sqft"></i>Sqft<span>1150</span>
                                            </div>
                                        </li>
                                        <li class="meta-item">
                                            <div class="text-9 flex"><i
                                                    class="icon-bath"></i>Baths<span>2</span>
                                            </div>
                                            <div class="text-9 flex"><i
                                                    class="icon-garage"></i>Garage<span>2</span>
                                            </div>
                                        </li>

                                    </ul>
                                    <div class="bot flex justify-between items-center">
                                        <h5 class="price">
                                            $8.600
                                        </h5>
                                        <div class="wrap-btn flex">
                                            <a href="property-detail-v1.html"
                                                class="tf-btn style-border pd-4">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="box-house hover-img style-list ">
                                <div class="image-wrap">
                                    <a href="property-detail-v1.html">
                                        <img class="lazyload" data-src={houselist2}
                                            src={houselist2} alt="" />
                                    </a>
                                    <ul class="box-tag flex gap-8 ">
                                        <li class="flat-tag text-4 bg-main fw-6 text-white">For Sale</li>
                                    </ul>
                                    <div class="list-btn flex gap-8 ">
                                        <a href="#" class="btn-icon save hover-tooltip"><i
                                                class="icon-save"></i>
                                            <span class="tooltip">Add Favorite</span>
                                        </a>
                                        <a href="#" class="btn-icon find hover-tooltip"><i
                                                class="icon-find-plus"></i>
                                            <span class="tooltip">Quick View</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="content">
                                    <h5 class="title">
                                        <a href="property-detail-v1.html">Elegant studio flat</a>
                                    </h5>
                                    <p class="location text-1 line-clamp-1 ">
                                        <i class="icon-location"></i> Los Angeles, California 91604
                                    </p>
                                    <ul class="meta-list flex">
                                        <li class="meta-item">
                                            <div class="text-9 flex"><i
                                                    class="icon-bed"></i>Beds<span>4</span>
                                            </div>
                                            <div class="text-9 flex"><i
                                                    class="icon-sqft"></i>Sqft<span>1150</span>
                                            </div>
                                        </li>
                                        <li class="meta-item">
                                            <div class="text-9 flex"><i
                                                    class="icon-bath"></i>Baths<span>2</span>
                                            </div>
                                            <div class="text-9 flex"><i
                                                    class="icon-garage"></i>Garage<span>2</span>
                                            </div>
                                        </li>

                                    </ul>
                                    <div class="bot flex justify-between items-center">
                                        <h5 class="price">
                                            $8.600
                                        </h5>
                                        <div class="wrap-btn flex">
                                            <a href="property-detail-v1.html"
                                                class="tf-btn style-border pd-4">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="box-house hover-img style-list ">
                                <div class="image-wrap">
                                    <a href="property-detail-v1.html">
                                        <img class="lazyload" data-src={houselist3}
                                            src={houselist4} alt="" />
                                    </a>
                                    <ul class="box-tag flex gap-8 ">
                                        <li class="flat-tag text-4 bg-main fw-6 text-white">For Sale</li>
                                    </ul>
                                    <div class="list-btn flex gap-8 ">
                                        <a href="#" class="btn-icon save hover-tooltip"><i
                                                class="icon-save"></i>
                                            <span class="tooltip">Add Favorite</span>
                                        </a>
                                        <a href="#" class="btn-icon find hover-tooltip"><i
                                                class="icon-find-plus"></i>
                                            <span class="tooltip">Quick View</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="content">
                                    <h5 class="title">
                                        <a href="property-detail-v1.html">Elegant studio flat</a>
                                    </h5>
                                    <p class="location text-1 line-clamp-1 ">
                                        <i class="icon-location"></i> Los Angeles, California 91604
                                    </p>
                                    <ul class="meta-list flex">
                                        <li class="meta-item">
                                            <div class="text-9 flex"><i
                                                    class="icon-bed"></i>Beds<span>4</span>
                                            </div>
                                            <div class="text-9 flex"><i
                                                    class="icon-sqft"></i>Sqft<span>1150</span>
                                            </div>
                                        </li>
                                        <li class="meta-item">
                                            <div class="text-9 flex"><i
                                                    class="icon-bath"></i>Baths<span>2</span>
                                            </div>
                                            <div class="text-9 flex"><i
                                                    class="icon-garage"></i>Garage<span>2</span>
                                            </div>
                                        </li>

                                    </ul>
                                    <div class="bot flex justify-between items-center">
                                        <h5 class="price">
                                            $8.600
                                        </h5>
                                        <div class="wrap-btn flex">
                                            <a href="property-detail-v1.html"
                                                class="tf-btn style-border pd-4">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="box-house hover-img style-list ">
                                <div class="image-wrap">
                                    <a href="property-detail-v1.html">
                                        <img class="lazyload" data-src={houselist4}
                                            src={houselist4} alt="" />
                                    </a>
                                    <ul class="box-tag flex gap-8 ">
                                        <li class="flat-tag text-4 bg-main fw-6 text-white">For Sale</li>
                                    </ul>
                                    <div class="list-btn flex gap-8 ">
                                        <a href="#" class="btn-icon save hover-tooltip"><i
                                                class="icon-save"></i>
                                            <span class="tooltip">Add Favorite</span>
                                        </a>
                                        <a href="#" class="btn-icon find hover-tooltip"><i
                                                class="icon-find-plus"></i>
                                            <span class="tooltip">Quick View</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="content">
                                    <h5 class="title">
                                        <a href="property-detail-v1.html">Elegant studio flat</a>
                                    </h5>
                                    <p class="location text-1 line-clamp-1 ">
                                        <i class="icon-location"></i> Los Angeles, California 91604
                                    </p>
                                    <ul class="meta-list flex">
                                        <li class="meta-item">
                                            <div class="text-9 flex"><i
                                                    class="icon-bed"></i>Beds<span>4</span>
                                            </div>
                                            <div class="text-9 flex"><i
                                                    class="icon-sqft"></i>Sqft<span>1150</span>
                                            </div>
                                        </li>
                                        <li class="meta-item">
                                            <div class="text-9 flex"><i
                                                    class="icon-bath"></i>Baths<span>2</span>
                                            </div>
                                            <div class="text-9 flex"><i
                                                    class="icon-garage"></i>Garage<span>2</span>
                                            </div>
                                        </li>

                                    </ul>
                                    <div class="bot flex justify-between items-center">
                                        <h5 class="price">
                                            $8.600
                                        </h5>
                                        <div class="wrap-btn flex">
                                            <a href="property-detail-v1.html"
                                                class="tf-btn style-border pd-4">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sw-pagination sw-pagination-mb text-center mt-20 d-lg-none d-block"></div>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}

export default HouseListing