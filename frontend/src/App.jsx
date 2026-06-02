import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

// Shared section-tag styles (used across multiple sections)
import './shared.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}