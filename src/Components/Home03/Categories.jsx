import React from 'react'

const Categories = () => {
    return (
        <section class="tf-spacing-1 section-categories pb-0">
                <div class="tf-container">
                    <div class="heading-section text-center mb-48">
                        <h2 class="title text-anime-wave">Try Searching For</h2>
                        <p class="text-1 wow animate__fadeInUp animate__animated" data-wow-duration="1.5s"
                            data-wow-delay="0s">Thousands of luxury home enthusiasts just like you have found their
                            dream home
                        </p>
                    </div>
                    <div class="wrap-categories-sw">
                        <div class="swiper tf-sw-categories style-pagination" data-preview="6" data-tablet="4"
                            data-mobile-sm="3" data-mobile="2" data-space="15" data-space-md="30" data-space-lg="30">
                            <div class="flex" style={{gap : "50px"}}>
                                <div class="">
                                    <a href="#" class="categories-item">
                                        <div class="icon-box">
                                            <i class="icon icon-apartment1">
                                            </i>
                                        </div>
                                        <div class="content text-center">
                                            <h5>Apartment</h5>
                                            <p class="mt-4 text-1">234 Property</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="">
                                    <a href="#" class="categories-item">
                                        <div class="icon-box">
                                            <i class="icon icon-villa">
                                            </i>
                                        </div>
                                        <div class="content text-center">
                                            <h5>Villa</h5>
                                            <p class="mt-4 text-1">234 Property</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="">
                                    <a href="#" class="categories-item active">
                                        <div class="icon-box">
                                            <i class="icon icon-studio">
                                            </i>
                                        </div>
                                        <div class="content text-center">
                                            <h5>Studio</h5>
                                            <p class="mt-4 text-1">234 Property</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="">
                                    <a href="#" class="categories-item">
                                        <div class="icon-box">
                                            <i class="icon icon-office1">
                                            </i>
                                        </div>
                                        <div class="content text-center">
                                            <h5>Office</h5>
                                            <p class="mt-4 text-1">234 Property</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="">
                                    <a href="#" class="categories-item">
                                        <div class="icon-box">
                                            <i class="icon icon-townhouse">
                                            </i>
                                        </div>
                                        <div class="content text-center">
                                            <h5>Townhouse</h5>
                                            <p class="mt-4 text-1">234 Property</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="">
                                    <a href="#" class="categories-item">
                                        <div class="icon-box">
                                            <i class="icon icon-commercial">
                                            </i>
                                        </div>
                                        <div class="content text-center">
                                            <h5>Commercial</h5>
                                            <p class="mt-4 text-1">234 Property</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="sw-pagination sw-pagination-category text-center d-lg-none mt-20 d-block"></div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Categories