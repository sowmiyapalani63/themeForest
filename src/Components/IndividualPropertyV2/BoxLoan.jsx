import React from 'react'

const BoxLoan = () => {
    return (
        <div>
            <div className="wg-property box-loan">
                <div className="wg-title text-11 fw-6 text-color-heading">Loan Calculator</div>
                <form className="form-pre-approved">
                    <div className="cols ">
                        <fieldset>
                            <label className=" text-1 fw-6 mb-12" for="amount">Total Amount</label>
                            <input type="number" id="amount" placeholder="1000" />
                        </fieldset>
                        <div className="wrap-input">
                            <fieldset className="payment">
                                <label className="text-1 fw-6 mb-12" for="payment">Down Payment</label>
                                <input type="number" id="payment" placeholder="2000" />
                            </fieldset>
                            <fieldset className="percent">
                                <input className="input-percent" type="text" value="20%" />
                            </fieldset>
                        </div>
                    </div>
                    <div className="cols">
                        <fieldset className="interest-rate">
                            <label className="text-1 fw-6 mb-12" for="interest-rate">Interest Rate</label>
                            <input type="number" id="interest-rate" placeholder="0" />
                        </fieldset>
                        <div className="select">
                            <label className="text-1 fw-6 mb-12">Amortization Period (months)</label>
                            <div className="nice-select" tabindex="0">
                                <span className="current">Select amortization period</span>
                                <ul className="list">
                                    <li data-value className="option selected">Select amortization period
                                    </li>
                                    <li data-value="1 month" className="option">1 month</li>
                                    <li data-value="2 months" className="option">2 months</li>
                                    <li data-value="3 months" className="option">3 months</li>
                                    <li data-value="4 months" className="option">4 months</li>
                                    <li data-value="5 months" className="option">5 months</li>
                                    <li data-value="6 months" className="option">6 months</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="cols">
                        <fieldset>
                            <label className=" text-1 fw-6 mb-12" for="tax">Property Tax</label>
                            <input type="number" id="tax" placeholder="$3000" />
                        </fieldset>
                        <fieldset>
                            <label className=" text-1 fw-6 mb-12" for="insurance">Home Insurance</label>
                            <input type="number" id="insurance" placeholder="$3000" />
                        </fieldset>
                    </div>

                    <div className="wrap-btn flex items-center justify-between ">
                        <a href="#" className="tf-btn bg-color-primary  pd-22 fw-7">
                            Calculate now <i className="icon-arrow-right-2 fw-4
                                            "></i>
                        </a>
                        <p className="text-1 mb-0 fw-5 text-color-heading">Your estimated monthly payment:
                            <span>$599.25</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BoxLoan