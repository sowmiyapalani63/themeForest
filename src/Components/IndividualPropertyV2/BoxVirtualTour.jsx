import React from 'react'
import propertyDetail2 from '../../Assests/images/section/property-detail-2.jpg'
const BoxVirtualTour = () => {
  return (
    <div>
         <div className="wg-property box-virtual-tour">
                                <div className="wg-title text-11 fw-6 text-color-heading">360 Virtual Tour</div>
                                <div className="image-wrap">
                                    <img src={propertyDetail2} alt=""/>
                                    <div className="box-icon">
                                        <div className="icons">
                                            <i className="icon-360"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
    </div>
  )
}

export default BoxVirtualTour