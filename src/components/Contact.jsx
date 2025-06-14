import React from 'react'
import { CONTACT } from '../constants'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='pb-20'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{ opacity:0, y:-100 }} transition={{ duration:0.5 }}  className='my-10 text-center text-4xl'>Contact</motion.h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a className='border-b' href="#">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact