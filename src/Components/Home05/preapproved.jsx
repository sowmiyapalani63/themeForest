import React, { useState, useEffect, useRef } from 'react'
import 'animate.css';
import preapprove from '../../Assests/images/section/section-pre-approved-2.jpg'

const Preapproved = () => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {

                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);
    return (
        <section class="section-pre-approved style-2 tf-spacing-1">
            <div class="tf-container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="content">
                            <div class="heading-section ">
                                <h2 class="title text-anime-wave">Calculate Mortgage Payments</h2>
                                <p class="text-1 animate__fadeInUp animate__animated" data-wow-duration="1.5s"
                                    data-wow-delay="0s">Estimate your payment with our easy-to-use loan
                                    calculator. Then
                                    get pre-qualified to buy by a local lender.
                                </p>
                            </div>
                            <form class="form-pre-approved">
                                <div class="cols ">
                                    <fieldset>
                                        <label class=" text-1 fw-6 mb-12" for="amount">Total Amount</label>
                                        <input type="number" id="amount" placeholder="1000" />
                                    </fieldset>
                                    <div class="wrap-input">
                                        <fieldset class="payment">
                                            <label class="text-1 fw-6 mb-12" for="payment">Down Payment</label>
                                            <input type="number" id="payment" placeholder="2000" />
                                        </fieldset>
                                        <fieldset class="percent">
                                            <input class="input-percent" type="text" value="20%" />
                                        </fieldset>
                                    </div>
                                </div>
                                <div class="cols">
                                    <fieldset class="interest-rate">
                                        <label class="text-1 fw-6 mb-12" for="interest-rate">Interest Rate</label>
                                        <input type="number" id="interest-rate" placeholder="0" />
                                    </fieldset>
                                    <div class="select">
                                        <label class="text-1 fw-6 mb-12">Amortization Period (months)</label>
                                        <div class="nice-select" tabindex="0">
                                            <span class="current">Select amortization period</span>
                                            <ul class="list">
                                                <li data-value class="option selected">Select amortization period
                                                </li>
                                                <li data-value="1 month" class="option">1 month</li>
                                                <li data-value="2 months" class="option">2 months</li>
                                                <li data-value="3 months" class="option">3 months</li>
                                                <li data-value="4 months" class="option">4 months</li>
                                                <li data-value="5 months" class="option">5 months</li>
                                                <li data-value="6 months" class="option">6 months</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="cols">
                                    <fieldset>
                                        <label class=" text-1 fw-6 mb-12" for="tax">Property Tax</label>
                                        <input type="number" id="tax" placeholder="$3000" />
                                    </fieldset>
                                    <fieldset>
                                        <label class=" text-1 fw-6 mb-12" for="insurance">Home Insurance</label>
                                        <input type="number" id="insurance" placeholder="$3000" />
                                    </fieldset>
                                </div>
                                <p class="text-1">Your estimated monthly payment: <span>8000</span>
                                </p>
                                <div class="wrap-btn">
                                    <a href="#" class="tf-btn bg-color-primary pd-6 fw-7">
                                        Calculate now
                                    </a>
                                    <a href="#" class="tf-btn style-border pd-7 ">Start over</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div
                            ref={cardRef}
                            className={`image-wrap ${isVisible ? 'animate__animated animate__fadeInRight' : ''}`}
                        >

                            <img
                                className="parallax-img lazyloaded ls-is-cached"
                                data-src="images/section/section-pre-approved-2.jpg"
                                src={preapprove}
                                alt=""
                                style={{
                                    transform: "translate3d(0px, 59px, 0px) scale(1.3)",
                                    willChange: "transform",
                                    transition: "transform 0.6s cubic-bezier(0, 0, 0, 1)",
                                }}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Preapproved
