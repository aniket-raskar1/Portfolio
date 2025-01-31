import React from 'react'
import ProfielPic from './../assets/projects/aniketRaskarProfile.jpeg'
import {delay, motion }from "framer-motion"

const containerVariants ={
    hidden : {opacity: 0, x:-100},
    visiable : {opacity:1 , x:0 , transition:{duration :0.5, staggerChildren:0.5, delay:1}}
}

const childVariants ={
    hidden: {opacity:0 , x:-100},
    visiable :{ opacity :1 ,x:0 , transition:{duration:0.5 , delay:1}}

}
function Hero() {
  return (
    <div className='pb-4 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
                <div>
                    <motion.img src={ProfielPic} alt='Aniket Raskar' className='border border-stone-800 rounded-3xl'
                        initial={{x:100 ,opacity :0}}
                        animate={{x:0, opacity:1}}
                        transition={{delay:0.6 , duration:1}}
                        width={650}
                        height={650}
                    />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <motion.div initial="hidden" animate="visiable" variants={containerVariants} className='flex flex-col items-center lg:items-start mt-10'>
                    <motion.h2 variants={childVariants} className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Aniket Raskar</motion.h2>
                    <motion.span variants={childVariants} className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                    <motion.p variants={childVariants} className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight'>I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</motion.p>
                    <motion.a variants={childVariants} href='/resume.pdf' target='_blank' rel='noopener noreferrer' download className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'>Download Resume</motion.a>
                    
                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default Hero