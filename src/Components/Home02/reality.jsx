import React from 'react'
import '../../Styles/css/animate.min.css';
import '../../Styles/css/bootstrap.css';
import '../../Styles/css/styles.css';
import '../../Styles/css/odometer.min.css';
import '../../Assests/icons/icomoon/style.css';


const Reality = () => {
    return (
        <section className="section-realty tf-spacing-1">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center">
                <h2
                  className="title text-white text-anime-wave"
                  style={{ perspective: "400px" }}
                >
                  <div
                    className="split-line"
                    style={{
                      display: "block",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <span>Market Your Property With Realty</span>
                  </div>
                </h2>
                <p
                  className="text-1 text-white wow animate__fadeInUp animate__ animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1.5s",
                    animationDelay: "0s",
                    animationName: "fadeInUp",
                  }}
                >
                  No obligation market appraisal for your property today.
                  <br />
                  Our virtual options are still available if you prefer.
                </p>
              </div>
            </div>
            <div className="tf-grid-layout-2 lg-col-4">
              <div className="counter-item mx-auto">
                <div className="count">
                  <div className="counter-number">
                    <div className="style-1-1 odometer odometer-auto-theme">
                      <div className="odometer-inside">
                        <span className="odometer-value">286</span>
                      </div>
                    </div>
                    <span className="sub plus">+</span>
                  </div>
                  <p className="text-1 text-white">Years of Business</p>
                </div>
              </div>
              <div className="counter-item mx-auto">
                <div className="count text-center">
                  <div className="counter-number">
                    <div className="style-1-2 odometer odometer-auto-theme">
                      <div className="odometer-inside">
                        <span className="odometer-value">4,8180</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-1 text-white">Properties Sold</p>
                </div>
              </div>
              <div className="counter-item mx-auto">
                <div className="count text-center">
                  <div className="counter-number">
                    <div className="style-1-3 odometer odometer-auto-theme">
                      <div className="odometer-inside">
                        <span className="odometer-value">98</span>
                      </div>
                    </div>
                    <span className="sub">%</span>
                  </div>
                  <p className="text-1 text-white">Happy Customers</p>
                </div>
              </div>
              <div className="counter-item mx-auto">
                <div className="count text-center">
                  <div className="counter-number">
                    <div className="style-1-4 odometer odometer-auto-theme">
                      <div className="odometer-inside">
                        <span className="odometer-value">1,8780</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-1 text-white">Years of Business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Reality
