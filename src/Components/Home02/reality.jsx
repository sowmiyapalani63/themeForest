
import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import '../../Styles/css/animate.min.css';
import '../../Styles/css/bootstrap.css';
import '../../Styles/css/styles.css';
import '../../Styles/css/odometer.min.css';
import '../../Assests/icons/icomoon/style.css';

const Reality = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.5, // Trigger when 50% of component is visible
  });

  return (
    <section ref={ref} className="section-realty tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2 className="title text-white text-anime-wave" style={{ perspective: '400px' }}>
                <div className="split-line" style={{ display: 'block', textAlign: 'center', position: 'relative' }}>
                  <span>Market Your Property With Realty</span>
                </div>
              </h2>
              <p
                className="text-1 text-white wow animate__fadeInUp animate__ animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
                style={{
                  visibility: 'visible',
                  animationDuration: '1.5s',
                  animationDelay: '0s',
                  animationName: 'fadeInUp',
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
                  <div className="style-1-1">
                    {inView && <CountUp start={0} end={286} duration={3} separator="," className="odometer" />}
                    <span className="sub plus">+</span>
                  </div>
                </div>
                <p className="text-1 text-white">Years of Business</p>
              </div>
            </div>
            <div className="counter-item mx-auto">
              <div className="count text-center">
                <div className="counter-number">
                  <div className="style-1-2">
                    {inView && <CountUp start={0} end={48180} duration={3} separator="," className="odometer" />}
                  </div>
                </div>
                <p className="text-1 text-white">Properties Sold</p>
              </div>
            </div>
            <div className="counter-item mx-auto">
              <div className="count text-center">
                <div className="counter-number">
                  <div className="style-1-3">
                    {inView && <CountUp start={0} end={98} duration={3} separator="," className="odometer" />}
                    <span className="sub">%</span>
                  </div>
                </div>
                <p className="text-1 text-white">Happy Customers</p>
              </div>
            </div>
            <div className="counter-item mx-auto">
              <div className="count text-center">
                <div className="counter-number">
                  <div className="style-1-4">
                    {inView && <CountUp start={0} end={18780} duration={2} separator="," className="odometer" />}
                  </div>
                </div>
                <p className="text-1 text-white">Years of Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reality;