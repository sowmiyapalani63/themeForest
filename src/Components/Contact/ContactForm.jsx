import React from 'react';


const ContactForm = () => {
  return (
    <section className="section-top-map style-2">
      <div className="wrap-map">
        <div id="map" className="row-height" data-map-zoom="16" data-map-scroll="true"></div>
      </div>
      <div className="box">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <form id="contactform" method="post" action="./contact/contact-process.php" className="form-contact">
                <div className="heading-section">
                  <h2 className="title">We Would Love to Hear From You</h2>
                  <p className="text-1">
                    We'll get to know you to understand your selling goals, explain the selling process so you know
                    what to expect.
                  </p>
                </div>

                <div className="cols">
                  <fieldset>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      name="name"
                      id="name"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      id="email-contact"
                      required
                    />
                  </fieldset>
                </div>
                <div className="cols">
                  <fieldset className="phone">
                    <label htmlFor="phone">Phone number:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your phone number"
                      name="phone"
                      id="phone"
                      required
                    />
                  </fieldset>
                  <div className="select">
                    <label className="text-1 fw-6 mb-12">What are you interested in?</label>
                    <div className="nice-select" tabindex="0">
                      <span className="current">Select</span>
                      <ul className="list">
                        <li data-value class="option selected">Select</li>
                        <li data-value="Location" class="option">Location</li>
                        <li data-value="Rent" className="option">Rent</li>
                        <li data-value="Sale" className="option">Sale</li>
                        <li data-value="sutilities" className="option">
                          utilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <fieldset>
                  <label htmlFor="message">Your Message:</label>
                  <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    id="message"
                    required
                  ></textarea>
                </fieldset>
                <div className="send-wrap">
                  <button className="tf-btn bg-color-primary fw-7 pd-8" type="submit">
                    Contact our experts
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
