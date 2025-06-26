
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resume from './pages/Resume'; 
import About from './pages/About';
import Projects from './pages/Projects';
import backgroundImage from './images/software_Engineer.jpg';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <section
              className="hero-section"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <div className="hero-content">
                <h1>Hello, I'm Leonardo</h1>
                <p>Welcome to my portfolio</p>
                <p>Software Engineer: Front-end, back-end, or Fullstack developer</p>
              </div>
            </section>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

