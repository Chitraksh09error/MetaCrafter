import { useState, useEffect } from 'react';
import Inloader from './components/Inloader';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Hiring from './pages/Hiring';
import Navbar from './components/Navbar';
function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideUp(true); // Start slide-up
    }, 1000); // Start animation after 2 sec

    const removeTimer = setTimeout(() => {
      setLoading(false); // Remove loader from DOM after animation
    }, 1500); // Loader removed after animation (1s later)

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      <div className=''>
        {loading ? (
          <Inloader slideUp={slideUp} />
        ) : (
          <>

              <Navbar/>

              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Services />} />
                <Route path="/hire" element={<Hiring />} />
              </Routes>

          </>
        )}
      </div>
    </>
  );
}

export default App;
