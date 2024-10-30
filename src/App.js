import './App.css';
import Home from './Screen/Home';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Screen/About';
import Service from './Screen/Service';
import Program from './Screen/Program';
import Event from './Screen/Event';
import Contact from './Screen/Contact';
import Blog from './Screen/Pages/Blog';
import Team from './Screen/Pages/Team';
import Testimonial from './Screen/Pages/Testimonial';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/program" element={<Program />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
