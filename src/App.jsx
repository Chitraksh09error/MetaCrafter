import { useState, useEffect } from 'react';
import Inloader from './components/Inloader';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Hiring from './pages/Hiring';
import Navbar from './components/Navbar';
import Pageloader from './components/Pageloader';
import Footer from './components/Footer';
function App() {
  const [loading, setLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const location = useLocation();
    const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideUp(true); // Start slide-up
    }, 1000); // Start animation after 2 sec

    const removeTimer = setTimeout(() => {
      setLoading(false);
      navigate('/'); // Remove loader from DOM after animation
    }, 1500); // Loader removed after animation (1s later)

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

   useEffect(() => {
    if (!loading) {
      setRouteLoading(true);
      const timer = setTimeout(() => setRouteLoading(false), 1500); // 1 sec loader
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
  <>
    {loading ? (
      <Inloader slideUp={slideUp} />
    ) : (
      <>
        <Navbar />
        <div className="relative">
          {/* Page Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Services />} />
            <Route path="/hire" element={<Hiring />} />
          </Routes>

          {/* Always present, just fade in/out */}
          <div
            className={` ${
              routeLoading && location.pathname !== '/' ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <Pageloader />
          </div>
        </div>
        <Footer/>
      </>
    )}
  </>
);


}

export default App;
