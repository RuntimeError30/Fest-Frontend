import { useGSAP } from '@gsap/react'
import React from 'react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })



    
  return (
      <div id='about' className='min-h-screen w-screen'>
          <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
              <h2 className='font-general  uppercase md:text-[10px]'>welcome to the</h2>

              <AnimatedTitle />



              <div className='about-subtext '>
                  <p className=''>where talent, creativity, and technology unite!</p>
                  <p className=''>This year’s event offers six exciting challenges in programming, software development, and robotics, designed to inspire the next generation of tech enthusiasts.</p>
                  <p>Whether you’re here to compete, learn, or connect, <b>UIU CSE Fest 2025</b> is an unforgettable experience in technology and innovation.</p>
                
              </div>
          </div>
          <div className='h-dvh w-screen' id='clip'>
              <div className='mask-clip-path about-image'>
                  <img
                      src="img/uiu.jpg"
                      alt=""
                      className='absolute left-0 top-0 size-full object-cover'
                  />
              </div>
          </div>
    </div>
  )
}

export default About