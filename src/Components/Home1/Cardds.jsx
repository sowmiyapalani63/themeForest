import React from 'react'
import SplitText from "./../Common/SplitText";
import AnimatedContent from '../Common/AnimatedContent';

const Cardds = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div className='main-content'>
      <section className="tf-spacing-1 section-categories pb-0">
        <div className="tf-container">
          <div className="heading-section text-center mb-48">
            <SplitText
              text="Try Searching For"
              className=" title text-anime-wave"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <AnimatedContent
              distance={5}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <p
                className="text-1 animate__fadeInUp animate__animated">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </AnimatedContent>

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
