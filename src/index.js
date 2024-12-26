import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
            
          // Styles

import './Styles/css/bootstrap.css'       
import './Styles/css/animate.min.css'
import './Styles/css/styles.css'   
      
          //  Icon Styes

import './Assests/icons/icomoon/style.css'


      // Javascript

// import './js/bootstrapmin.js'
// import './js/jquerymin.js'
// import './js/lazysizemin.js'
// import './js/wowmin.js'
// import './js/jquerynice-selectmin.js'
// import './js/main.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
