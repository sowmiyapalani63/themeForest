import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import propertydetail3 from '../../Assests/images/section/property-detail-3.jpg';
import propertydetail4 from '../../Assests/images/section/property-detail-4.jpg';
import propertydetail5 from '../../Assests/images/section/property-detail-5.jpg';
import propertydetail6 from '../../Assests/images/section/property-detail-6.jpg';

const SectionPropertyImage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: propertydetail3, title: 'Property Detail 3' },
    { src: propertydetail4, title: 'Property Detail 4' },
    { src: propertydetail5, title: 'Property Detail 5' },
    { src: propertydetail6, title: 'Property Detail 6' },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="section-property-image">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="wrap-image">
              {/* Main Image */}
              <div className="image img-1">
                <div
                  className="image-wrap relative d-block"
                  onClick={() => openLightbox(0)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    className="lazyload"
                    src={propertydetail3}
                    alt="Property Detail 3"
                  />
                </div>
                <div className="tag-property">
                  <div className="icon">
                    {/* SVG Icon */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.875 13.125L6.17417 8.82583C6.34828 8.65172 6.55498 8.51361 6.78246 8.41938..."
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-16 text-white fw-6 lh-20">1/16 Photos</div>
                </div>
              </div>

              {/* Side and Bottom Images */}
              <div className="wrap-image-right">
                <div className="image img-2" onClick={() => openLightbox(1)}>
                  <img
                    className="lazyload"
                    src={propertydetail4}
                    alt="Property Detail 4"
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className="bot">
                  <div className="image img-3" onClick={() => openLightbox(2)}>
                    <img
                      className="lazyload"
                      src={propertydetail5}
                      alt="Property Detail 5"
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <div className="image img-4" onClick={() => openLightbox(3)}>
                    <img
                      className="lazyload"
                      src={propertydetail6}
                      alt="Property Detail 6"
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={images}
        index={currentIndex}
      />
    </section>
  );
};

export default SectionPropertyImage;
