import React from 'react'
import TopsearchCards from './TopsearchCards'
import Head from './Head'


const Topsearch = () => {
    return (
        <>
        <section class="flat-title style-2">
            <div class="tf-container flat-title style-2">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="title-inner ">
                            <ul class="breadcrumb">
                                <li><a class="home fw-6 text-color-3" href="index.html">Home</a></li>
                                <li>Property Listing</li>
                            </ul>
                        </div>
                        <div class="wg-filter style-2 relative">
                            <div class="form-title style-2">
                                <form>
                                    <fieldset>
                                        <input type="text" placeholder="Address, City, ZIP..." />
                                    </fieldset>
                                </form>
                                <div class="nice-select" tabindex="0">
                                    <span class="current">Status</span>
                                    <ul class="list">
                                        <li data-value class="option selected">Status</li>
                                        <li data-value="bungalow" class="option">Bungalow</li>
                                        <li data-value="apartment" class="option">Apartment</li>
                                        <li data-value="house" class="option">House</li>
                                        <li data-value="smart-home" class="option">Smart Home</li>
                                        <li data-value="Single family home" class="option">Office</li>
                                        <li data-value="Multi family home" class="option">Villa</li>
                                    </ul>
                                </div>
                                <div class="nice-select" tabindex="0">
                                    <span class="current">Type</span>
                                    <ul class="list">
                                        <li data-value="1" class="option">Type</li>
                                        <li data-value="bungalow" class="option">Bungalow</li>
                                        <li data-value="apartment" class="option">Apartment</li>
                                        <li data-value="house" class="option">House</li>
                                        <li data-value="smart-home" class="option">Smart Home</li>
                                        <li data-value="Single family home" class="option">Office</li>
                                        <li data-value="Multi family home" class="option">Villa</li>
                                    </ul>
                                </div>
                                <div class="nice-select" tabindex="0">
                                    <span class="current">Bath</span>
                                    <ul class="list">
                                        <li data-value="" class="option selected focus">Baths</li>
                                        <li data-value="floating" class="option">Floating baths</li>
                                        <li data-value="massage" class="option">Massage baths</li>
                                        <li data-value="floor-standing" class="option">Floor-standing bath</li>
                                        <li data-value="built-in" class="option">Built-in baths</li>
                                    </ul>
                                </div>
                                <div class="nice-select" tabindex="0">
                                    <span class="current">Beds</span>
                                    <ul class="list">
                                        <li data-value="" class="option selected focus">Beds</li>
                                        <li data-value="twin" class="option">Twin beds</li>
                                            <li data-value="bunk" class="option">Bunk beds</li>
                                        <li data-value="kids" class="option">Kids beds</li>
                                        <li data-value="single" class="option">Single bed</li>
                                    </ul>
                                </div>
                                <div class="wrap-btn">
                                    <div class="btn-filter show-form">
                                        <div class="icons">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 4H14" stroke="#F1913D" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10 4H3" stroke="#F1913D" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M21 12H12" stroke="#F1913D" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M8 12H3" stroke="#F1913D" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M21 20H16" stroke="#F1913D" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 20H3" stroke="#F1913D" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14 2V6" stroke="#F1913D" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M8 10V14" stroke="#F1913D" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M16 18V22" stroke="#F1913D" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <a href="#" class="tf-btn bg-color-primary pd-3 fw-6">
                                        Search <i class="icon-MagnifyingGlass fw-6"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="wd-search-form">
                                <div class="group-price">
                                    <div class="widget-price">
                                        <div class="box-title-price">
                                            <span class="title-price">Price range</span>
                                            <div class="caption-price">
                                                <span>from</span>
                                                <span class="value fw-6" id="slider-range-value1"></span>
                                                <span>to</span>
                                                <span class="value fw-6" id="slider-range-value2"></span>
                                            </div>
                                        </div>
                                        <div id="slider-range"></div>
                                        <div class="slider-labels">
                                            <div>
                                                <input type="hidden" name="min-value" value="" />
                                                <input type="hidden" name="max-value" value="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widget-price">
                                        <div class="box-title-price">
                                            <span class="title-price">Size range</span>
                                            <div class="caption-price">
                                                <span>from</span>
                                                <span class="value fw-6" id="slider-range-value01"></span>
                                                <span>to</span>
                                                <span class="value fw-6" id="slider-range-value02"></span>
                                            </div>
                                        </div>
                                        <div id="slider-range2"></div>
                                        <div class="slider-labels">
                                            <div>
                                                <input type="hidden" name="min-value2" value="" />
                                                <input type="hidden" name="max-value2" value="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" group-select">
                                    <div class="box-select">
                                        <div class="nice-select" tabindex="0">
                                            <span class="current">Province / States</span>
                                            <ul class="list">
                                                <li data-value="1" class="option">California</li>
                                                <li data-value="2" class="option selected">Texas</li>
                                                <li data-value="3" class="option">Florida </li>
                                                <li data-value="4" class="option">New York
                                                </li>
                                                <li data-value="5" class="option">Illinois</li>
                                                <li data-value="6" class="option">Washington</li>
                                                <li data-value="7" class="option">Pennsylvania</li>
                                                <li data-value="8" class="option">Ohio</li>
                                                <li data-value="9" class="option">Georgia</li>
                                                <li data-value="10" class="option">North Carolina
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="box-select">
                                        <div class="nice-select" tabindex="0">
                                            <span class="current">Rooms</span>
                                            <ul class="list">
                                                <li data-value="1" class="option">1</li>
                                                <li data-value="2" class="option selected">2</li>
                                                <li data-value="3" class="option">3</li>
                                                <li data-value="4" class="option">4</li>
                                                <li data-value="5" class="option">5</li>
                                                <li data-value="6" class="option">6</li>
                                                <li data-value="7" class="option">7</li>
                                                <li data-value="8" class="option">8</li>
                                                <li data-value="9" class="option">9</li>
                                                <li data-value="10" class="option">10</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="box-select">

                                        <div class="nice-select" tabindex="0">
                                            <span class="current">Bath: Any</span>
                                            <ul class="list">
                                                <li data-value="1" class="option">1</li>
                                                <li data-value="2" class="option selected">2</li>
                                                <li data-value="3" class="option">3</li>
                                                <li data-value="4" class="option">4</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="box-select">

                                        <div class="nice-select" tabindex="0">
                                            <span class="current">Beds: Any</span>
                                            <ul class="list">
                                                <li data-value="1" class="option">1</li>
                                                <li data-value="2" class="option selected">2</li>
                                                <li data-value="3" class="option">3</li>
                                                <li data-value="4" class="option">4</li>
                                                <li data-value="5" class="option">5</li>
                                                <li data-value="6" class="option">6</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="group-checkbox">
                                    <div class=" title text-4 fw-6">Amenities:</div>
                                    <div class="group-amenities ">
                                        <fieldset class="checkbox-item style-1  ">
                                            <label>
                                                <span class="text-4">Bed linens</span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="checkbox-item style-1   mt-12">
                                            <label>
                                                <span class="text-4"> Carbon alarm</span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="checkbox-item style-1   mt-12">
                                            <label>
                                                <span class="text-4">Check-in lockbox </span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="checkbox-item style-1   mt-12">
                                            <label>
                                                <span class="text-4">Coffee maker </span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="checkbox-item style-1  ">
                                            <label>
                                                <span class="text-4"> Dishwasher</span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="checkbox-item style-1   mt-12">
                                            <label>
                                                <span class="text-4"> Fireplace</span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="checkbox-item style-1   mt-12">
                                            <label>
                                                <span class="text-4">Extra pillows </span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="checkbox-item style-1   mt-12">
                                            <label>
                                                <span class="text-4">First aid kit </span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>

                                        <fieldset class="checkbox-item style-1  ">
                                            <label>
                                                <span class="text-4">Hangers </span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="checkbox-item style-1   mt-12">
                                            <label>
                                                <span class="text-4">Iron</span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="checkbox-item style-1   mt-12">
                                            <label>
                                                <span class="text-4"> Microwave</span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="checkbox-item style-1   mt-12">
                                            <label>
                                                <span class="text-4">Fireplace</span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>

                                        <fieldset class="checkbox-item style-1  ">
                                            <label>
                                                <span class="text-4"> Refrigerator</span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="checkbox-item style-1   mt-12">
                                            <label>
                                                <span class="text-4">Security cameras </span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="checkbox-item style-1   mt-12">
                                            <label>
                                                <span class="text-4"> Smoke alarm</span>
                                                <input type="checkbox " />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="checkbox-item style-1   mt-12">
                                            <label>
                                                <span class="text-4">Fireplace </span>
                                                <input type="checkbox" />
                                                <span class="btn-checkbox"></span>
                                            </label>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                   
                </div>
                
                
            </div>
            <TopsearchCards />
        </section>
        
        </>
    )
}

export default Topsearch