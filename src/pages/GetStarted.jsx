import { useState } from 'react';
import '../styles/GetStarted.css'
import Login from './../components/Login';
import SignUp from './../components/SignUp';
import Img from '../assets/img.jpg'
import ToogleSwitch from './../components/ToogleSwitch';

const GetStarted = () => {
  
  const [formType, setFormType] = useState('login')

  return (
    <>
    <div className='box'>
    {/* <ToogleSwitch formType={formType} setFormType={setFormType}/> */}
      <img className='boxInfo' src={Img} alt="img"/>
    {/* <div className='boxInfo'>
    </div> */}
      {formType === 'login' ?
      <Login formType={formType} setFormType={setFormType} /> :  <SignUp formType={formType} setFormType={setFormType} />
      }
    </div>
    </>
  )
}

export default GetStarted