import './App.css'
import AiComp from './components/AiComp/AiComp'
import Footer from './components/Footer/Footer'
import Section8 from './components/Section8/Section8'
import Section1 from './components/Section_1/Section1'
import Section2 from './components/Section_2/Section2'
import Section3 from './components/Section_3/Section3'
import Section4 from './components/Section_4/Section4'
import Section5 from './components/Section_5/Section5'
import Section6 from './components/Section_6/Section6'
import Stats from './components/Stats/Stats'
import Testimonials from './components/Testimonials/Testimonials'
import VideoSection from './components/VideoSection/VideoSection'


const statsData = [
  { number: "9+", description: "Years in Custom Software Development" },
  { number: "3000+", description: "Software Projects Delivered" },
  { number: "1600+", description: "Certified Technology Professionals" },
  { number: "98%", description: "Client Retention Rate" },
];

function App() {

  return (
    <div className='app'>
      <Section1/>
      {/* <Section5/> */}
      <Section2/>
      <Section3/>
      {/* <VideoSection/> */}
      <Section8/>
      <Stats stats={statsData}/>
      <button onClick={() => window.open("https://calendly.com/enquire-stepconsultancy/seo-landing-page", "_blank")}
      className="consultation-btn">Schedule Consultation</button>
      <br />
      <br />
      <Section6/>
      <Section4/>
      <br />
      <AiComp/>
      <button onClick={() => window.open("https://calendly.com/enquire-stepconsultancy/seo-landing-page", "_blank")}
      className="consultation-btn">Talk with AI</button>
      <br />
      <Testimonials/>
      <Footer/> 

    </div>
  )
}

export default App