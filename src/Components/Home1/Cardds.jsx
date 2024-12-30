import React from 'react'

const Cardds = () => {
  return (
    <div className='main-content'>
      <section className="tf-spacing-1 section-categories pb-0">
        <div className="tf-container">
          <div className="heading-section text-center mb-48">
            <h2 className="title text-anime-wave">Try Searching For</h2>
            <p className="text-1 wow animate__fadeInUp animate__animated" data-wow-duration="1.5s"
              data-wow-delay="0s">Thousands of luxury home enthusiasts just like you have found their
              dream home
            </p>
          </div>
          <div className="wrap-categories-sw">
            <div className="row">
              {/* First Card */}
              <div className="col-12 col-md-4 col-lg-2 mb-4">
                <a href="#" className="categories-item">
                  <div className="icon-box">
                    <i className="icon icon-apartment1"></i>
                  </div>
                  <div className="content text-center">
                    <h5>Apartment</h5>
                    <p className="mt-4 text-1">234 Property</p>
                  </div>
                </a>
              </div>

              {/* Second Card */}
              <div className="col-12 col-md-4 col-lg-2 mb-4">
                <a href="#" className="categories-item">
                  <div className="icon-box">
                    <i className="icon icon-villa"></i>
                  </div>
                  <div className="content text-center">
                    <h5>Villa</h5>
                    <p className="mt-4 text-1">234 Property</p>
                  </div>
                </a>
              </div>

              {/* Third Card */}
              <div className="col-12 col-md-4 col-lg-2 mb-4">
                <a href="#" className="categories-item active">
                  <div className="icon-box">
                    <i className="icon icon-studio"></i>
                  </div>
                  <div className="content text-center">
                    <h5>Studio</h5>
                    <p className="mt-4 text-1">234 Property</p>
                  </div>
                </a>
              </div>

              {/* Fourth Card */}
              <div className="col-12 col-md-4 col-lg-2 mb-4">
                <a href="#" className="categories-item">
                  <div className="icon-box">
                    <i className="icon icon-office1"></i>
                  </div>
                  <div className="content text-center">
                    <h5>Office</h5>
                    <p className="mt-4 text-1">234 Property</p>
                  </div>
                </a>
              </div>

              {/* Fifth Card */}
              <div className="col-12 col-md-4 col-lg-2 mb-4">
                <a href="#" className="categories-item">
                  <div className="icon-box">
                    <i className="icon icon-townhouse"></i>
                  </div>
                  <div className="content text-center">
                    <h5>Townhouse</h5>
                    <p className="mt-4 text-1">234 Property</p>
                  </div>
                </a>
              </div>

              {/* Sixth Card */}
              <div className="col-12 col-md-4 col-lg-2 mb-4">
                <a href="#" className="categories-item">
                  <div className="icon-box">
                    <i className="icon icon-commercial"></i>
                  </div>
                  <div className="content text-center">
                    <h5>Commercial</h5>
                    <p className="mt-4 text-1">234 Property</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cardds
