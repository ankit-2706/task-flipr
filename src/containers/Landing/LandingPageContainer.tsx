import React from 'react'
import Header from '../../components/Header/Header'
import ContactForm from '../../components/ContactForm/ContactForm'
const LandingPageContainer = () => {
  return (
    <div>
      <Header />
      <div>
      <section
        id="home"
        className="relative flex items-center justify-between bg-landing-image bg-cover bg-center h-screen"
      >
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          {/* Left Text */}
          <div className="max-w-lg">
            <h1 className="text-white text-5xl font-bold leading-tight mb-4">
              Consultation, <br /> Design, <br/> & Marketing
            </h1>
          </div>

          {/* Right Form */}
          <div className="rounded-lg p-8 max-w-md w-full">
            <ContactForm />
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default LandingPageContainer
