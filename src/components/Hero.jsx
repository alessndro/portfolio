import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <header className='font-poppins h-full w-full flex container mx-auto px-20'>
        <div className='h-full w-full flex bg-white flex-col md:flex-row'>
            <div className='md:w-1/2 md:flex md:justify-center flex-col text-focus-in'>
                <h1 className='text-8xl font-extralight custom-thin'>Hi there,</h1>
                <p className='text-8xl font-extralight mb-7'>I'm Alessandro</p>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Product Owner',
                        4000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Front-end Developer',
                        4000,
                        'Entrepreneur',
                        4000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '3em', display: 'inline-block', fontWeight: '200',  }}
                    repeat={Infinity}
                />
            </div>
            <div className='md:w-1/2'>
            <Spline scene="https://prod.spline.design/8zoWxaaV19VHbPC7/scene.splinecode" />
            </div>
        </div>
    </header>
  )
}
