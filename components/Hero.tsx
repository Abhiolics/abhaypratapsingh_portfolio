import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Link from 'next/link'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='pb-20 pt-36' id='projects'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20
             h-screen ' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]
              ' fill='purple' />
                <Spotlight className='top-28 left-80 w-[50vw]
             h-[80vh] ' fill='blue' />
            </div>

            {/* UI GRID */}

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className='flex justify-center relative my-20 z-10 '>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h1 className='uppercase traking-widest text-md text-center max-w-80 tracking-wider rounded-full px-4 py-1 text-green-500 font-semibold animate-pulse '>&#x2022; Open to Work</h1>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Turning ideas into intuitive experiences' />
                    <p className='text-center md:tracking-wider mb-4 text-lg md:text-lg lg:text-2xl'>
                        Hello, I&apos;m <span className='text-3xl text-orange-500'> Abhay </span>, a young <span className='text-2xl font-bold text-orange-500'>Frontend Developer & Product Designer </span>based in Lucknow,India.
                    </p>
                    <Link href="#about">
                        <MagicButton title="Show my work"
                        icon = {<FaLocationArrow size={15}/>}
                        position='right' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
