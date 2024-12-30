import React from 'react';
import '../../Styles/css/animate.min.css';
import '../../Styles/css/bootstrap.css';
import '../../Styles/css/styles.css';
import '../../Styles/css/odometer.min.css';
import '../../Assests/icons/icomoon/style.css';
import person2 from '../../Assests/images/section/person-2.png';

const Appraisal = () => {
    return (
        <section className="section-appraisal">
            <div className="wg-appraisal style-2">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content text-center">
                                <div className="heading-section mb-32 text-start">
                                    <h2 className="title text-white text-anime-wave">
                                        Are You Selling Or <br /> Renting Your Property?
                                    </h2>
                                    <p className="text-1 text-white animate__fadeInUp animate__animated" 
                                        data-wow-duration="1.5s" data-wow-delay="0s">
                                        Thousands of luxury home enthusiasts just like you visit our website.
                                    </p>
                                </div>
                                <a
                                    href="#"
                                    className="tf-btn bg-color-white fw-7 pd-11 animate__fadeInUp animate__animated"
                                    data-wow-duration="1s"
                                    data-wow-delay="0s"
                                >
                                    Request your free appraisal
                                </a>
                                <div className="person mt-4">
                                    <img
                                        className="animate__fadeInRight animate__animated"
                                        data-wow-duration="2s"
                                        data-wow-delay="0s"
                                        src={person2}
                                        alt="Person illustration"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appraisal;
