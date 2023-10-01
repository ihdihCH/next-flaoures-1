
import ContactCom from '@/components/ContactCom'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Images from '@/components/Images'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/SliderData'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
    <Head>
      <title>Floures project</title>
    </Head>
    <Hero heading='Floures' message='Le Lorem Ipsum est simplement du faux texte employé. ' button="Go"/>
    <Slider slides={SliderData}/>
    <Images />
    <ContactCom />
    <Footer />
  </div>
  )
}
