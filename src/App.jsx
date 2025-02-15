import './App.css';
import Footer from './components/Common/Footer';
import Navbar from './components/Common/Navbar';
import ContactForm from './components/Core/ContactUs/ContactUsSec';
import HeroSec1 from './components/Core/HeroSection/HeroSec1';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSec1 />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;