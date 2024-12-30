import React from 'react'
import propertydetail from '../../Assests/images/section/property-detail.jpg'

const WgPropertyVideo = () => {
    return (
        <div>
            <div class=" wg-property video">
                <div className="wg-title text-11 fw-6 text-color-heading">
                    Video
                </div>
                <div className="widget-video">
                    <img className="lazyload" data-src={propertydetail}
                        src={propertydetail} alt=""/>
                        <a href="https://www.youtube.com/watch?v=MLpWrANjFbI" className="popup-youtube">
                            <i className="icon-play"></i></a>
                </div>
            </div>
        </div>
    )
}

export default WgPropertyVideo