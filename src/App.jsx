import { useState } from 'react'
import './App.css'
import LandingPageContainer from './containers/Landing/LandingPageContainer'
import WhyChooseUs from './containers/Landing/WhyChooseUs'
import AboutUs from './containers/Landing/AboutUs'
import Our_project from './containers/Landing/our_project'
import HappyClientsSection from './containers/Landing/HappyClientsSection'
import NewsletterSection from './containers/Landing/NewsletterSection'
import AdminDashboard from './containers/AdminPanel/AdminDashboard'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <LandingPageContainer />
        <WhyChooseUs />
        <AboutUs />
        <Our_project />
        <HappyClientsSection/>
        <NewsletterSection />
        <AdminDashboard />
        
       
        
      </div>
      
      
    </>
  )
}

export default App
