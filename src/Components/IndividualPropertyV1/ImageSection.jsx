import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Thumbnails, Zoom, Fullscreen, Slideshow, Share } from 'yet-another-react-lightbox/plugins';
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
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.875 13.125L6.17417 8.82583C6.34828 8.65172 6.55498 8.51361 6.78246 8.41938C7.00995 8.32515 7.25377 8.27665 7.5 8.27665C7.74623 8.27665 7.99005 8.32515 8.21754 8.41938C8.44502 8.51361 8.65172 8.65172 8.82583 8.82583L13.125 13.125M11.875 11.875L13.0492 10.7008C13.2233 10.5267 13.43 10.3886 13.6575 10.2944C13.885 10.2001 14.1288 10.1516 14.375 10.1516C14.6212 10.1516 14.865 10.2001 15.0925 10.2944C15.32 10.3886 15.5267 10.5267 15.7008 10.7008L18.125 13.125M3.125 16.25H16.875C17.2065 16.25 17.5245 16.1183 17.7589 15.8839C17.9933 15.6495 18.125 15.3315 18.125 15V5C18.125 4.66848 17.9933 4.35054 17.7589 4.11612C17.5245 3.8817 17.2065 3.75 16.875 3.75H3.125C2.79348 3.75 2.47554 3.8817 2.24112 4.11612C2.0067 4.35054 1.875 4.66848 1.875 5V15C1.875 15.3315 2.0067 15.6495 2.24112 15.8839C2.47554 16.1183 2.79348 16.25 3.125 16.25ZM11.875 6.875H11.8817V6.88167H11.875V6.875ZM12.1875 6.875C12.1875 6.95788 12.1546 7.03737 12.096 7.09597C12.0374 7.15458 11.9579 7.1875 11.875 7.1875C11.7921 7.1875 11.7126 7.15458 11.654 7.09597C11.5954 7.03737 11.5625 6.95788 11.5625 6.875C11.5625 6.79212 11.5954 6.71263 11.654 6.65403C11.7126 6.59542 11.7921 6.5625 11.875 6.5625C11.9579 6.5625 12.0374 6.59542 12.096 6.65403C12.1546 6.71263 12.1875 6.79212 12.1875 6.875Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
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


      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        plugins={[Zoom, Fullscreen, Slideshow, Share]}

        zoom={{ maxZoomPixelRatio: 3 }}
        slides={images}
        index={currentIndex}
      />
    </section>
  );
};

export default SectionPropertyImage;
