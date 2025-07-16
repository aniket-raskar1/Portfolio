import React from 'react'
import ProfielPic from './../assets/projects/aniketRaskarProfile.jpg'
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
                    <motion.p variants={childVariants} className='my-2 max-w-lg py-6 text-md leading-relaxed tracking-tight '>I am a results-driven technical professional passionate about leveraging innovative technologies to tackle complex challenges and drive business success. With extensive experience in <p className='font-bold'>full-stack development, cloud computing, and data analytics</p>, I specialize in designing scalable solutions using cutting-edge frameworks and tools such as Python, JavaScript, React, Node.js, and Django. My hands-on expertise in cloud platforms like AWS, Azure, and Google Cloud Platform—along with a strong command of DevOps practices using Docker, Kubernetes, and CI/CD pipelines—enables me to optimize both development and deployment processes efficiently.

In addition, I excel in agile project management and cross-functional collaboration, ensuring projects are delivered on time and within budget while meeting high-quality standards. I am also well-versed in data modeling, visualization, and machine learning, allowing me to transform raw data into actionable insights that drive strategic decisions. Constantly staying ahead of industry trends, I thrive on continuous learning and problem-solving, eager to innovate and contribute to dynamic, forward-thinking teams.</motion.p>
                    <motion.a variants={childVariants} href='https://drive.google.com/file/d/1nDpxa_7nSjqP3KN-ihVK7d7ozuz8g92Q/view?usp=sharing' target='_blank' rel='noopener noreferrer' download className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'>Download Resume</motion.a>
                    
                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default Hero
