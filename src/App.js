import React, { useEffect } from 'react';
import PreLoader from './Components/Common/PreLoader';
import Agents from './Pages/Agents/Agents';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Pages/Home1/Homepage1';
import Home2 from './Pages/Home2/home2';
import Home3  from './Pages/Home3/home3'; 
import Home04  from './Pages/Home4/home4'; 
import Home05 from './Pages/Home5/Home5'
import Header from './Components/Common/Header';
import FooterHead from './Components/Common/FooterHead';
import Footer from './Components/Common/Footer';
import BlogList from './Pages/Blog/BlogList';
import Contact from './Pages/Contact/Contact';
import Faqs from './Pages/Faqs/Faq';
import IndividualPropertyV1 from './Pages/IndividualPropertyV1/IndividualPropertyV1';
import IndividualPropertyV2 from './Pages/IndividualPropertyV2/IndividualPropertyV1';
import Layout from './Pages/Listing/Layout'
import Version1 from './Pages/Version1/Version1';
import Version2 from './Pages/Version2/Version2'



function App() {
 
  return (
    <>
      <Router>
      <Header />
      <PreLoader/>
        <Routes>
        <Route path="/" element={<Version2/>} />
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/Home2" element={<Home2 />} />
          <Route path="/Home3" element={<Home3 />} />
          <Route path="/Home4" element={<Home04 />} />
          <Route path="/Home5" element={<Home05 />} />
          <Route path="/property-gird-top-search" element={<Layout />} />

          <Route path="/Property-detail-v1" element={<IndividualPropertyV1/>} />
          <Route path="/Property-detail-v2" element={<IndividualPropertyV2/>} />
          <Route path="/Blog-list" element={<BlogList />} />
          <Route path="/Faq" element={<Faqs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/version1" element={<Version1/>} />
          
        </Routes>
        <FooterHead />
        <Footer />
      </Router>
    </>
  );
}

export default App;
