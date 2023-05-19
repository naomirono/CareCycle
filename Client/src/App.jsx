import NavbarLanding from './components/NavbarLanding';
// import LandingPage from './components/LandingPage';
import HeroSection from './components/hero';
import About from './components/About';
import ProblemSolutionSection from './components/ProblemSolution';
import DonationSection from './components/DonationSection';
import ImpactSection from './components/ImpactSection';
import TestimonialsSection from './components/Testimonial';
import GetInvolved from './components/GetInvolved';
import ContactSection from './components/Contact';
import FAQSection from './components/FaqSection';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    < > 
    <div>
    <NavbarLanding/>
    {/* <LandingPage/> */}
    <HeroSection/>
    <About/>
    <ProblemSolutionSection/>
    <DonationSection/>
    <ImpactSection/>
    <TestimonialsSection/>
    <GetInvolved/>
    <ContactSection/>
    <FAQSection/>
    <Footer/>
    </div>
      
    </>
  )
}

export default App
