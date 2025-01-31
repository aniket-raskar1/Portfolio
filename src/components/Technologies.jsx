import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { RiMoonFoggyLine, RiNextjsLine, RiNodejsLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { animate, inertia, motion } from 'framer-motion'

const iconVariant = (duration) => ({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition: {
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse"
        }
    }
})


function Technologies() {
  return (
    <div className='pb-24'>
        <motion.h2 
        whileInView={{opacity:1 , y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration : 1.5}}
        className='my-20 text-center text-4xl '>Technologies</motion.h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div initial="initial" animate="animate" variants={iconVariant(2)}>
                <RiReactjsLine className='text-7xl text-cyan-500'></RiReactjsLine>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={iconVariant(3)}>
                <RiNextjsLine  className='text-7xl '/>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={iconVariant(5)}>
                <RiTailwindCssLine className='text-7xl text-cyan-500'/>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={iconVariant(2)}>
                <RiNodejsLine className='text-7xl text-green-400' />
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={iconVariant(6)}>
                <SiMongodb className='text-7xl text-green-400' />
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={iconVariant(4)} >
                <BiLogoPostgresql className='text-7xl text-blue-700'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies