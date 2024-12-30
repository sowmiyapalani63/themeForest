import React, { useState } from 'react';
import FormContactSeller from '../IndividualPropertyV1/FormContactSeller'
import NeedHelp from './NeedHelp'

const Accordians = () => {

    const [activeItem, setActiveItem] = useState(null);

    // Toggle the FAQ item open or closed
    const handleToggle = (itemId) => {
        setActiveItem(activeItem === itemId ? null : itemId); // Toggle between open and close
    };

    return (
        <section class="section-faq ">
            <div class="tf-container">
                <div class="row">
                    <div class="col-xl-8 col-lg-7">
                        <div class="heading-section  mb-48">
                            <h2 class="title ">Frequently Asked Questions</h2>
                        </div>
                        <div className="tf-faq mb-49">
                            <h3 className="fw-8 title mb-24">Overview</h3>
                            <ul className="box-faq" id="wrapper-faq">
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-one"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-one' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-one');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-one'}
                                        aria-controls="accordion-faq-one"
                                    >
                                        Why Should I Use Your Services? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-one"
                                        className={`collapse ${activeItem === 'accordion-faq-one' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the platform, you
                                            are ready to start using our services. Whether it's accessing specific features,
                                            making transactions, or utilizing our tools, you'll find everything you need at your
                                            fingertips.
                                        </p>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-two"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-two' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-two');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-two'}
                                        aria-controls="accordion-faq-two"
                                    >
                                        Why Should I Use Your Services? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-two"
                                        className={`collapse ${activeItem === 'accordion-faq-two' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the platform, you
                                            are ready to start using our services. Whether it's accessing specific features,
                                            making transactions, or utilizing our tools, you'll find everything you need at your
                                            fingertips.
                                        </p>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-three"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-three' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-three');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-three'}
                                        aria-controls="accordion-faq-three"
                                    >
                                        How Secure Are Your Services? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-three"
                                        className={`collapse ${activeItem === 'accordion-faq-three' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the platform, you
                                            are ready to start using our services. Whether it's accessing specific features,
                                            making transactions, or utilizing our tools, you'll find everything you need at your
                                            fingertips.
                                        </p>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-four"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-four' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-four');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-four'}
                                        aria-controls="accordion-faq-four"
                                    >
                                        Is There Customer Support Available? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-four"
                                        className={`collapse ${activeItem === 'accordion-faq-four' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the platform, you
                                            are ready to start using our services. Whether it's accessing specific features,
                                            making transactions, or utilizing our tools, you'll find everything you need at your
                                            fingertips.
                                        </p>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-five"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-five' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-five');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-five'}
                                        aria-controls="accordion-faq-five"
                                    >
                                        How Can I Update My Account Information? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-five"
                                        className={`collapse ${activeItem === 'accordion-faq-five' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the platform, you
                                            are ready to start using our services. Whether it's accessing specific features,
                                            making transactions, or utilizing our tools, you'll find everything you need at your
                                            fingertips.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="tf-faq mb-49">
                            <h3 className="fw-8 title mb-24">Costs and Payments</h3>
                            <ul className="box-faq" id="wrapper-faq">
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-one"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-one' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-one');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-one'}
                                        aria-controls="accordion-faq-one"
                                    >
                                        How Do You Calculate Fees? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-one"
                                        className={`collapse ${activeItem === 'accordion-faq-one' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the
                                            platform, you are ready to start using our services. Whether it's
                                            accessing
                                            specific features, making transactions, or utilizing our tools, you'll
                                            find
                                            everything you need at your fingertips.
                                        </p>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-two"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-two' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-two');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-two'}
                                        aria-controls="accordion-faq-two"
                                    >
                                        How Do I Pay My Invoices? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-two"
                                        className={`collapse ${activeItem === 'accordion-faq-two' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the
                                            platform, you are ready to start using our services. Whether it's
                                            accessing
                                            specific features, making transactions, or utilizing our tools, you'll
                                            find
                                            everything you need at your fingertips.
                                        </p>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-three"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-three' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-three');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-three'}
                                        aria-controls="accordion-faq-three"
                                    >
                                        Are There Opportunities For Discounts Or Promotions? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-three"
                                        className={`collapse ${activeItem === 'accordion-faq-three' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the platform, you
                                            are ready to start using our services. Whether it's accessing specific features,
                                            making transactions, or utilizing our tools, you'll find everything you need at your
                                            fingertips.
                                        </p>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-four"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-four' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-four');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-four'}
                                        aria-controls="accordion-faq-four"
                                    >
                                        Are There Any Hidden Fees Not Displayed In The Pricing Table? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-four"
                                        className={`collapse ${activeItem === 'accordion-faq-four' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the platform, you
                                            are ready to start using our services. Whether it's accessing specific features,
                                            making transactions, or utilizing our tools, you'll find everything you need at your
                                            fingertips.
                                        </p>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-five"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-five' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-five');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-five'}
                                        aria-controls="accordion-faq-five"
                                    >
                                        What Is The Refund Procedure? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-five"
                                        className={`collapse ${activeItem === 'accordion-faq-five' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the platform, you
                                            are ready to start using our services. Whether it's accessing specific features,
                                            making transactions, or utilizing our tools, you'll find everything you need at your
                                            fingertips.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="tf-faq mb-49">
                            <h3 className="fw-8 title mb-24">Safety and Security</h3>
                            <ul className="box-faq" id="wrapper-faq">
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-one"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-one' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-one');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-one'}
                                        aria-controls="accordion-faq-one"
                                    >
                                        What Languages Does Your Service Support? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-one"
                                        className={`collapse ${activeItem === 'accordion-faq-one' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the platform, you
                                            are ready to start using our services. Whether it's accessing specific features,
                                            making transactions, or utilizing our tools, you'll find everything you need at your
                                            fingertips.
                                        </p>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-two"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-two' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-two');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-two'}  
                                        aria-controls="accordion-faq-two"
                                    >
                                        How Do I Integrate Your Service Into My System? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-two"
                                        className={`collapse ${activeItem === 'accordion-faq-two' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the platform, you
                                            are ready to start using our services. Whether it's accessing specific features,
                                            making transactions, or utilizing our tools, you'll find everything you need at your
                                            fingertips.
                                        </p>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-three"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-three' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-three');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-three'}
                                        aria-controls="accordion-faq-three"
                                    >
                                        What Are The Safety Features Of Your System? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-three"
                                        className={`collapse ${activeItem === 'accordion-faq-three' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the platform, you
                                            are ready to start using our services. Whether it's accessing specific features,
                                            making transactions, or utilizing our tools, you'll find everything you need at your
                                            fingertips.
                                        </p>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-four"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-four' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-four');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-four'}
                                        aria-controls="accordion-faq-four"
                                    >
                                        How Can I Request New Features? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-four"
                                        className={`collapse ${activeItem === 'accordion-faq-four' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the platform, you
                                            are ready to start using our services. Whether it's accessing specific features,
                                            making transactions, or utilizing our tools, you'll find everything you need at your
                                            fingertips.
                                        </p>
                                    </div>
                                </li>
                                <li className="faq-item">
                                    <a
                                        href="#accordion-faq-five"
                                        className={`faq-header h6 ${activeItem === 'accordion-faq-five' ? '' : 'collapsed'}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggle('accordion-faq-five');
                                        }}
                                        aria-expanded={activeItem === 'accordion-faq-five'}
                                        aria-controls="accordion-faq-five"
                                    >
                                         Is My Data Protected? <i className="icon-CaretDown"></i>
                                    </a>
                                    <div
                                        id="accordion-faq-five"
                                        className={`collapse ${activeItem === 'accordion-faq-five' ? 'show' : ''}`}
                                        data-bs-parent="#wrapper-faq"
                                    >
                                        <p className="faq-body">
                                            Once your account is set up and you've familiarized yourself with the platform, you
                                            are ready to start using our services. Whether it's accessing specific features,
                                            making transactions, or utilizing our tools, you'll find everything you need at your
                                            fingertips.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <div class=" tf-sidebar sticky-sidebar ">
                            <FormContactSeller />
                        </div>
                    </div>
                    <NeedHelp />
                </div>
            </div>
        </section>
    )
}

export default Accordians