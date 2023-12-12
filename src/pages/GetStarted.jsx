import { useState } from 'react';
import '../styles/GetStarted.css'
import Login from './../components/Login';
import SignUp from './../components/SignUp';
import Img from '../assets/img.jpg'
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { motion } from 'framer-motion'
import Loading from '../components/Loading';

const GetStarted = () => {
  
  const [formType, setFormType] = useState('login')
  const [ user, loading ] = useAuthState(auth)

  return (
    <>
    { !loading ? 
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
    : 
    <Loading/>}
    </>
  )
}

export default GetStarted