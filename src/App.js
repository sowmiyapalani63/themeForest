
import PreLoader from './Components/Common/PreLoader';
import Agents from './Pages/Agents/Agents';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Common/Header';
import FooterHead from './Components/Common/FooterHead';
import Footer from './Components/Common/Footer';
import BlogList from './Pages/Blog/BlogList';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <>
 <Router>
 <Header />
      <PreLoader />
      <Routes>
        <Route path="/" element={<Agents />} />

        {/* Blog Routes */}

        <Route path="/Blog-list" element={<BlogList />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <FooterHead />
      <Footer />
    </Router>
    </>
  );
}

export default App;
