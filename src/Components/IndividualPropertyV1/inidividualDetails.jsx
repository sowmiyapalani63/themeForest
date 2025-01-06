import React from 'react'
import WgProperty from './WgProperty'
import WgPropertyVideo from './WgPropertyVideo'
import BoxPropertyDetail from './BoxPropertyDetail'
import BoxAmenities from './BoxAmenities'
import BoxAttachments from './BoxAttachments'
import BoxVirtualTour from './BoxVirtualTour'
import SinglePropertymap from './SinglePropertymap'
import SinglePropertyFloor from './SinglePropertyFloor'
import FormContactSeller from './FormContactSeller'
import FormContactAgent from './FormContactAgent'
import BoxLoan from './BoxLoan'
import SinglePropertyNearby from './SinglePropertyNearby'
import BoxComment from './BoxComment'

const InidividualDetails = () => {
    return (
        <div>
            <section className="section-property-detail ">
                <div className="tf-container">
                    
                    <div className="row">
                    
                       
                        
                        <div className="col-xl-8 col-lg-7">
                            <WgProperty />
                            <WgPropertyVideo />
                            <BoxPropertyDetail />
                            <BoxAmenities />
                            <SinglePropertymap />
                            <SinglePropertyFloor />
                            <BoxAttachments />
                            <BoxVirtualTour />
                            <BoxLoan/>
                            <SinglePropertyNearby/>
                            <BoxComment/>
                        </div>

                        
                        <div className="col-xl-4 col-lg-5">
                            <div className="tf-sidebar sticky-sidebar">
                                <FormContactSeller />
                                <FormContactAgent />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InidividualDetails
