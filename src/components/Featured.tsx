import React from 'react'
import FeatureCard from './FeatureCard'

const Featured = () => {
  return (
    <div className='bg-[#CFA6A61C] pt-14 pb-14'>
        <h2 className='sm:w-[67%] w-[49%] m-auto text-lg sm:text-xl font-semibold mb-6'>Featured works</h2>
        <FeatureCard src={"/pic1.png"}/>
        <FeatureCard src={"/pic2.png"}/>
        <FeatureCard src={"/pic3.png"}/>

        </div>
  )
}

export default Featured