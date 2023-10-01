import ContactCom from '@/components/ContactCom'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Hero heading='Contact Page' message='Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page' button='Contact Me'/>
      <ContactCom />
      <Footer/>
    </div>
  )
}

export default Contact