import React from 'react'
import logo from './../assets/AR.webp'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href='/' aria-label='Home'>
          <img src={logo} className='mx-2' width={100} height={33} alt='Logo'></img>
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
          <a href='https://www.linkedin.com/in/aniket-raskar-86a26b296/' target='_blank' rel='noopener noreferrer' aria-label='Linkdin'>
            <FaLinkedin />
          </a>

          <a href='https://github.com/aniket-raskar1' target='_blank' rel='noopener noreferrer' aria-label='Linkdin'>
            <FaGithub />
          </a>

          <a href='https://www.instagram.com/a.n.i.k.e.t_099/' target='_blank' rel='noopener noreferrer' aria-label='Linkdin'>
            <FaInstagram />
          </a>

          <a href='https://x.com/partic1e0' target='_blank' rel='noopener noreferrer' aria-label='Linkdin'>
            <FaTwitter />
          </a>
      </div>
    </nav>
  )
}

export default Navbar