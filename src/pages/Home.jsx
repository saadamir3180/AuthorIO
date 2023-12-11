import React from 'react'
import '../styles/Svg.css'
import '../styles/Home.css'
import Circle from './../components/Circle';
import ZigZag from './../components/ZigZag';
import { motion } from 'framer-motion';
import SearchBooks from '../components/SearchBooks';
const Home = () => {
  return (
    <motion.div className="box"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className='homeContainer'>
        <h1 className='homeh1'> AI Empowered <br/>Authorship Redefined</h1>
        <SearchBooks/>

      <div className='svg svgZigZag'><ZigZag/></div>
      
      <div className='svg svgCircle'><Circle/></div>

    </div>
    </motion.div>
  )
}

export default Home