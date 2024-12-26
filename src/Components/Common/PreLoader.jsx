import React, { useState, useEffect } from 'react';
import loadingImage from '../../Assests/images/logo/loading.png'; 

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer); 
  }, []);

  return (
    isLoading && (
      <div id="loading">
        <div id="loading-center">
          <div className="loader-container">
            <div className="wrap-loader">
              <div className="loader"></div>
              <div className="icon">
                <img src={loadingImage} alt="Loading..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PreLoader;
