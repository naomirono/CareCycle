import NavbarLanding from './components/NavbarLanding';
import LandingPage from './components/LandingPage';
import About from './components/About';
import DonationSection from './components/DonationSection';
import './App.css'

function App() {

  return (
    < > 
    <div className='bg-gradient-to-l from-[#dc2430] to-[#7B1FA2]'>
    <NavbarLanding/>
    <LandingPage/>
    <About/>
    <DonationSection/>
    </div>
      
    </>
  )
}

export default App
