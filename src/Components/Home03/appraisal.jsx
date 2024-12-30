import React from 'react'
import person3 from '../../Assests/images/section/person-2.png'

const Appraisal = () => {
    return (
        <section class="section-appraisal style-2">
                <div class="wg-appraisal style-3">
                    <div class="tf-container">
                        <div class="row">
                            <div class="col-12">
                                <div class="content">
                                    <div class="heading-section mb-32">
                                        <h2 class="title text-anime-wave">Have confidence in any
                                            market with us</h2>
                                        <p class="text-1  animate__fadeInUp animate__animated" data-wow-duration="1s"
                                            data-wow-delay="0s">Proty® agents have the experience to get the job
                                            done in today’s market, backed by a robust network of over
                                            140,000 agents in more than 9,000 offices worldwide. With our
                                            extensive global connections and deep local insights, you gain
                                            an edge that transcends what you'll find online.
                                        </p>
                                    </div>
                                    <a href="#"
                                        class="tf-btn bg-color-primary pd-19 fw-7  animate__fadeInUp animate__animated"
                                        data-wow-duration="1s" data-wow-delay="0s">
                                        Find your agnet today
                                    </a>
                                    <div class="person  animate__fadeInRight animate__animated"
                                        data-wow-duration="1s" data-wow-delay="0s">
                                        <img src={person3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Appraisal
