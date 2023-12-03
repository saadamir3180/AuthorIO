import React from 'react'
import '../styles/Svg.css'
import '../styles/Home.css'
import Circle from './../components/Circle';
import ZigZag from './../components/ZigZag';
const Home = () => {
  return (
    <div className='homeContainer'>
        <h1 className='homeh1'> AI Empowered <br/>Authorship Redefined</h1>



      <div className='svg svgZigZag'><ZigZag/></div>
      
      <div className='svg svgCircle'><Circle/></div>

    </div>
  )
}

export default Home