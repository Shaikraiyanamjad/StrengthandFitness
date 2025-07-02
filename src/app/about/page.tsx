import About from "@/components/About"
import AboutCoach from "@/components/AboutCoach"
import ContactInformation from "@/components/ContactInformation"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import WhyWorkWithMe from "@/components/WhyWorkWithMe"
import React from "react"

const page = () => {
  return (
    <div>
        <Header />
        <About />
        <AboutCoach />
        <WhyWorkWithMe />
        <ContactInformation />
        <Footer />
    </div>
  )
}

export default page