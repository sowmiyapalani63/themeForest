import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactSlider from "react-slider";

const Search = () => {
    
   
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
        <div className="page-title home03">
            <div className="tf-container">
                <div className="row">
                    <div className="col-12">
                        <div className="content-inner">
                            <div className="heading-title">
                                <h1 className="title">Your Way Home Starts Here</h1>
                                <p className="h6 fw-4">Thousands of luxury home enthusiasts just like you visit our website.</p>
                            </div>

                            <div className="widget-tabs style-1">
                                <ul className="widget-menu-tab">
                                    <li className="item-title active">For Rent</li>
                                    <li className="item-title">For Sale</li>
                                </ul>

                                <div className="wg-filter">
                                    <div className="widget-content-inner active">
                                        <div className="form-title">
                                            <form className="w-full">
                                                <fieldset>
                                                    <input type="text" placeholder="Address, City, ZIP..." className="input-field" />
                                                </fieldset>
                                            </form>

                                            
                                            <select 
                                                className="dropdown nice-select"
                                                value={propertyType}
                                                onChange={(e) => setPropertyType(e.target.value)}
                                            >
                                                <option value="">Property type</option>
                                                <option value="bungalow">Bungalow</option>
                                                <option value="apartment">Apartment</option>
                                                <option value="house">House</option>
                                                <option value="smart-home">Smart Home</option>
                                                <option value="office">Office</option>
                                                <option value="villa">Villa</option>
                                            </select>

                                            
                                            <select 
                                                className="dropdown nice-select"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                            >
                                                <option value="">Select Location</option>
                                                <option value="texas">Texas</option>
                                                <option value="florida">Florida</option>
                                                <option value="new-york">New York</option>
                                                <option value="illinois">Illinois</option>
                                                <option value="washington">Washington</option>
                                                <option value="pennsylvania">Pennsylvania</option>
                                                <option value="ohio">Ohio</option>
                                                <option value="georgia">Georgia</option>
                                                <option value="north-carolina">North Carolina</option>
                                            </select>
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
                                            <div className="wrap-btn">
                                                <button className="tf-btn bg-color-primary pd-3" onClick={handleSearch}>
                                                    Search <i className="icon-MagnifyingGlass fw-6"></i>
                                                </button>
                                            </div>
                                           
                                        </div>
                                    </div>  
                                </div>
                            </div>
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
    );
}

export default Search;
