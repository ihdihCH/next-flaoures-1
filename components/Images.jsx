import React from 'react'
import Image1 from "../public/Image1.jpg"
import Image4 from "../public/Image4.jpg"
import Image5 from "../public/Image5.jpg"
import Image6 from "../public/Image6.jpg"
import ImagSection from './ImagSection'

const Images = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Go To Facebook</p>
        <p className='pb-4'>@capture</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <ImagSection socialImg={Image4}/>
            <ImagSection socialImg={Image5}/>
            <ImagSection socialImg={Image6}/>
            <ImagSection socialImg={Image1}/>
            <ImagSection socialImg={Image5}/>
            <ImagSection socialImg={Image6}/>
        </div>
    </div>
  )
}

export default Images