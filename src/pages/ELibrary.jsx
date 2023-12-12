import React from 'react'
import { motion } from 'framer-motion'

const ELibrary = () => {
  return (
    <motion.div className="box page"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className='page'>
        E-Library
    </div>
    </motion.div>
  )
}

export default ELibrary