import React from 'react'
import cta from '../../Assests/images/section/cta.png'

const FooterHead = () => {
  return (
    <section class="section-CTA">
    <div class="tf-container">
        <div class="row">
            <div class="col-12">
                <div class="content-inner">
                    <img src={cta} alt="" />
                    <div class="content">
                        <h4 class="text-white mb-8 ">Find a Local Real Estate Agent Today</h4>
                        <p class="text-white text-1">If you’re looking to buy or sell a home. We’ll help you
                            make
                            the most money
                            possible.</p>
                    </div>
                    <a href="#" class="tf-btn style-2 fw-6 ">Find your location agent <i
                            class="icon-MagnifyingGlass fw-6"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default FooterHead