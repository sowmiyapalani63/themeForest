
import PreLoader from './Components/Common/PreLoader';
import Agents from './Pages/Agents/Agents';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './Pages/Blog/BlogList';
function App() {
  return (
    <>
 <Router>
      <PreLoader />
      <Routes>
        <Route path="/" element={<Agents />} />

        {/* Blog Routes */}

        <Route path="/Blog-list" element={<BlogList />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
