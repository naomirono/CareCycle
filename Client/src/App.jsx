import NavbarLanding from './components/NavbarLanding';
import LandingPage from './components/LandingPage';
import About from './components/About';
import ProblemSection from './components/ProblemSection';
import DonationSection from './components/DonationSection';
import ImpactSection from './components/ImpactSection';
import TestimonialsSection from './components/Testimonial';
import ContactSection from './components/Contact';
import './App.css'

function App() {

  return (
    < > 
    <div>
    <NavbarLanding/>
    <LandingPage/>
    <About/>
    <ProblemSection/>
    <DonationSection/>
    <ImpactSection/>
    <TestimonialsSection/>
    <ContactSection/>
    </div>
      
    </>
  )
}

export default App
