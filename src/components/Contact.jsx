import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
function Contact() {
  return (
    <div className='border-t border-stone-900 pb-20'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className='my-20 text-center text-4xl'>Get in touch</motion.h2>
        <div className='text-center tracking-tight'>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className='my-4'>
                {CONTACT.address}
            </motion.p>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className='my-4'>
            </motion.p>
            <a href={`mailto:${CONTACT.email}`} className='border-b mt-4'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact