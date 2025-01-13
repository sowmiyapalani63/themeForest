import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import '../../Styles/css/animate.min.css';
import '../../Styles/css/bootstrap.css';
import '../../Styles/css/styles.css';
import '../../Styles/css/odometer.min.css';
import '../../Assests/icons/icomoon/style.css';
import SplitText from "../Common/SplitText";
import AnimatedContent from "../Common/AnimatedContent";

const Reality = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleAnimationComplete = () => {
    console.log("H2 title has animated!");
  };

  return (
    <section ref={ref} className="section-realty tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <SplitText
                text="Market Your Property With Reality"
                className="title text-anime-wave text-white"
                delay={50}
                animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
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
                <p className="text-1 animate__fadeInUp animate__animated text-white">
                  No obligation market appraisal for your property today. Our virtual options are
                  <br />still available if you prefer
                </p>
              </AnimatedContent>
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
                <p className="text-1 text-white">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reality;
