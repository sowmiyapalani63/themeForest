import React from 'react'
import appstore from '../../Assests/images/items/app-store.jpg'
import chplay from '../../Assests/images/items/ch-play.jpg'
import phone from '../../Assests/images/items/phone.png'

const Downloads = () => {
    return (
        <section class="section-download tf-spacing-1">
        <div class="tf-container">
            <div class="content relative">
                <div class="row ">
                    <div class="col-lg-6 relative z-5">
                        <div class="heading-section ">
                            <h2 class="title text-anime-wave">Take Your Search With You</h2>
                            <p class="text-1  animate__fadeInUp animate__animated" data-wow-duration="1.5s"
                                data-wow-delay="0s">We're here to help you find your dream home, offer
                                property
                                insights, and connect you with top local agents on iOS and Android.
                            </p>
                        </div>
                        <div class="wrap-download">
                            <a href="#" class="app-store  animate__fadeInUp animate__animated"
                                data-wow-duration="1s" data-wow-delay="0s"><img src={appstore}
                                    alt="" /></a>
                            <a href="#" class="ch-play animate__fadeInUp animate__animated"
                                data-wow-duration="1s" data-wow-delay="0.1s"><img src={chplay}
                                    alt="" /></a>
                        </div>
                    </div>

                </div>
                <div class="image-wrap lg-hide  animate__fadeInRight animate__animated"
                    data-wow-duration="2.5s" data-wow-delay="0s">
                    <img src={phone} alt="" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Downloads
