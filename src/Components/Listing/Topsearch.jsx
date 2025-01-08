import React, { useEffect, useRef, useState } from 'react';
import TopsearchCards from './TopsearchCards'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactSlider from "react-slider";

import $ from 'jquery';

window.jQuery = window.$ = $;
require('jquery-nice-select');



const Topsearch = () => {
    const selectRef = useRef();

    useEffect(() => {
        $(selectRef.current).niceSelect();
    }, []);
    const [propertyType, setPropertyType] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState([100, 500]);
    const [sizeRange, setSizeRange] = useState([50, 300]);
    const [province, setProvince] = useState("Texas");
    const [rooms, setRooms] = useState("2");
    const [baths, setBaths] = useState("2");
    const [beds, setBeds] = useState("2");




    const handleSearch = () => {
        console.log("Selected Property Type:", propertyType);
        console.log("Selected Location:", location);

    };

    const amenitiesList = [
        "Bed linens", "Carbon alarm", "Check-in lockbox", "Coffee maker",
        "Dishwasher", "Fireplace", "Extra pillows", "First aid kit",
        "Hangers", "Iron", "Microwave", "Refrigerator",
        "Security cameras", "Smoke alarm"
    ];

    const [selectedAmenities, setSelectedAmenities] = useState([]);


    const handleCheckboxChange = (amenity) => {
        setSelectedAmenities((prev) =>
            prev.includes(amenity)
                ? prev.filter((item) => item !== amenity)
                : [...prev, amenity]
        );
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleDivs = () => {
        setIsOpen((prev) => !prev);
    };

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
                                            <div class="icons" onClick={toggleDivs} style={{ cursor: "pointer" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 4H14" stroke="#F1913D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M10 4H3" stroke="#F1913D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M21 12H12" stroke="#F1913D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M8 12H3" stroke="#F1913D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M21 20H16" stroke="#F1913D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M12 20H3" stroke="#F1913D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M14 2V6" stroke="#F1913D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M8 10V14" stroke="#F1913D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M16 18V22" stroke="#F1913D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <a href="#" class="tf-btn bg-color-primary pd-3 fw-6">
                                            Search <i class="icon-MagnifyingGlass fw-6"></i>
                                        </a>
                                    </div>
                                </div>


                            </div>

                        </div>
                         {isOpen && (
                <div class="wd-search-form show mx-auto pt-5 mt-5">
                    <div className="toggle-content">
                        <div className="group-price">

                            <div className="widget-price">
                                <div className="box-title-price">
                                    <span className="title-price">Price range</span>
                                    <div className="caption-price">
                                        <span>from</span>
                                        <span className="value fw-6">${priceRange[0]}</span>
                                        <span>to</span>
                                        <span className="value fw-6">${priceRange[1]}</span>
                                    </div>
                                </div>
                                <ReactSlider
                                    className="slider"
                                    thumbClassName="thumb"
                                    trackClassName="track"
                                    value={priceRange}
                                    min={0}
                                    max={1000}
                                    step={10}
                                    onChange={setPriceRange}
                                    pearling
                                    minDistance={50}
                                    renderTrack={(props, state) => (
                                        <div
                                            {...props}
                                            className={`track ${state.index === 1 ? "track-active" : "track-inactive"}`}
                                        />
                                    )}
                                />
                            </div>


                            <div className="widget-price">
                                <div className="box-title-price">
                                    <span className="title-price">Size range</span>
                                    <div className="caption-price">
                                        <span>from</span>
                                        <span className="value fw-6">{sizeRange[0]} sqft</span>
                                        <span>to</span>
                                        <span className="value fw-6">{sizeRange[1]} sqft</span>
                                    </div>
                                </div>
                                <ReactSlider
                                    className="slider"
                                    thumbClassName="thumb"
                                    trackClassName="track"
                                    value={sizeRange}
                                    min={500}
                                    max={5000}
                                    step={100}
                                    onChange={(value) => setSizeRange(value)}
                                    pearling
                                    minDistance={200}
                                    renderTrack={(props, state) => (
                                        <div
                                            {...props}
                                            className={`track ${state.index === 1 ? "track-active" : "track-inactive"}`}
                                        />
                                    )}
                                />
                            </div>
                        </div>

                        <div className="group-checkbox">
                            <div className="title text-4 fw-6">Amenities:</div>
                            <div className="group-amenities">
                                {amenitiesList.map((amenity, index) => (
                                    <fieldset className="checkbox-item style-1 mt-11 " key={index}>
                                        <label>
                                            <span className="text-4">{amenity}</span>
                                            <input
                                                type="checkbox"
                                                checked={selectedAmenities.includes(amenity)}
                                                onChange={() => handleCheckboxChange(amenity)}
                                            />
                                            <span className="btn-checkbox"></span>
                                        </label>
                                    </fieldset>
                                ))}
                            </div>
                        </div>
                        <div className="group-select pt-5">

                            <div className="box-select">
                                <select className="nice-select" value={province} onChange={(e) => setProvince(e.target.value)}>
                                    <option value="California">California</option>
                                    <option value="Texas">Texas</option>
                                    <option value="Florida">Florida</option>
                                    <option value="New York">New York</option>
                                    <option value="Illinois">Illinois</option>
                                    <option value="Washington">Washington</option>
                                    <option value="Pennsylvania">Pennsylvania</option>
                                    <option value="Ohio">Ohio</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="North Carolina">North Carolina</option>
                                </select>
                            </div>


                            <div className="box-select">
                                <select className="nice-select" value={rooms} onChange={(e) => setRooms(e.target.value)}>
                                    {[...Array(10).keys()].map((num) => (
                                        <option key={num + 1} value={num + 1}>{num + 1}</option>
                                    ))}
                                </select>
                            </div>


                            <div className="box-select">
                                <select className="nice-select" value={baths} onChange={(e) => setBaths(e.target.value)}>
                                    {[1, 2, 3, 4].map((num) => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>


                            <div className="box-select">
                                <select className="nice-select" value={beds} onChange={(e) => setBeds(e.target.value)}>
                                    {[1, 2, 3, 4, 5, 6].map((num) => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            )}

                    </div>


                </div>
                <TopsearchCards />
            </section>
           


        </>

    )
}

export default Topsearch
