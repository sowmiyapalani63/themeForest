import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactSlider from "react-slider";

const Head = () => {
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
    <div class="page-title home01">
            <div class="tf-container ">
                <div class="row justify-center relative">
                    <div class="col-lg-8 ">
                        <div class="content-inner">
                            <div class="heading-title">
                                <h1 class="title">Search Luxury Homes</h1>
                                <p class="h6 fw-4">Thousands of luxury home enthusiasts just like you visit our website.
                                </p>
                            </div>
                            <div class="wg-filter">
                                <div class="form-title">
                                    <div class="tf-dropdown-sort " data-bs-toggle="dropdown">
                                        <div class="btn-select">
                                            <span class="text-sort-value">For sale</span><i class="icon-CaretDown"></i>
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="select-item active">
                                                <span class="text-value-item">For sale</span>
                                            </div>
                                            <div class="select-item">
                                                <span class="text-value-item">For rent</span>
                                            </div>
                                        </div>
                                    </div>
                                    <form>
                                        <fieldset>
                                            <input type="text" placeholder="Place, neighborhood, school or agent..." />
                                        </fieldset>
                                    </form>
                                    <div class="box-item wrap-btn">
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
                                        <a href="#" class="tf-btn bg-color-primary pd-3">
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
                                                    <input type="hidden" name="min-value" value="" ></input>
                                                    <input type="hidden" name="max-value" value=""></input>
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
                                                    <input type="hidden" name="min-value2" value=""></input>
                                                    <input type="hidden" name="max-value2" value=""></input>
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
                                                    <input type="checkbox" />
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
  )
}

export default Head