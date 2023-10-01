import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import React from 'react'

const Work = () => {
  return (
    <div>
        <Hero heading="Work Page" message="Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire." button="Show Work"/>
        <Portfolio />
        <Footer/>
    </div>
  )
}

export default Work