import React from 'react'
import floor from '../../Assests/images/section/floor.jpg'
const SinglePropertyFloor = () => {
    return (
        <div>
            <div className="wg-property single-property-floor">
                <div className="wg-title text-11 fw-6 text-color-heading">Floor Plans</div>
                <ul className="box-floor" id="parent-floor">
                    <li className="floor-item">
                        <div role="button" className="floor-header" data-bs-target="#floor-one"
                            data-bs-toggle="collapse" aria-expanded="false" aria-controls="floor-one">
                            <div className="inner-left">
                                <i className="icon icon-CaretDown"></i>
                                <span className="text-btn">First Floor</span>
                            </div>
                            <ul className="inner-right">
                                <li className="flex items-center gap-8">
                                    <i className="icon icon-beds-3"></i>
                                    2 Bedroom
                                </li>
                                <li className="flex items-center gap-8">
                                    <i className="icon icon-baths"></i>
                                    2 Bathroom
                                </li>
                            </ul>
                        </div>
                        <div id="floor-one" className="collapse show" data-bs-parent="#parent-floor">
                            <div className="faq-body">
                                <div className="box-img">
                                    <img src={floor} alt="img-floor" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="floor-item">
                        <div className="floor-header collapsed" role="button" data-bs-target="#floor-two"
                            data-bs-toggle="collapse" aria-expanded="false" aria-controls="floor-two">
                            <div className="inner-left">
                                <i className="icon icon-CaretDown"></i>
                                <span className="text-btn">Second Floor</span>
                            </div>
                            <ul className="inner-right">
                                <li className="flex items-center gap-8">
                                    <i className="icon icon-beds-3"></i>
                                    2 Bedroom
                                </li>
                                <li className="flex items-center gap-8">
                                    <i className="icon icon-baths"></i>
                                    2 Bathroom
                                </li>
                            </ul>
                        </div>
                        <div id="floor-two" className="collapse" data-bs-parent="#parent-floor">
                            <div className="faq-body">
                                <div className="box-img">
                                    <img src={floor} alt="img-floor" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SinglePropertyFloor