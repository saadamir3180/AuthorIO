import { useState } from 'react';
import '../styles/GetStarted.css'
import Login from './../components/Login';
import SignUp from './../components/SignUp';
import Img from '../assets/img.jpg'
import { motion } from 'framer-motion'

const GetStarted = () => {
  
  const [formType, setFormType] = useState('login')

  return (
    <>
    <motion.div className="box"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className='box'>
    {/* <ToogleSwitch formType={formType} setFormType={setFormType}/> */}
      <img className='boxInfo' src={Img} alt="img"/>

      {formType === 'login' ?
      <Login formType={formType} setFormType={setFormType} /> :  <SignUp formType={formType} setFormType={setFormType} />
      }
    </div>
    </motion.div>
    </>
  )
}

export default GetStarted