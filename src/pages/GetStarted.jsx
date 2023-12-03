import { useState } from 'react';
import '../styles/GetStarted.css'
import Login from './../components/Login';
import SignUp from './../components/SignUp';
import ToogleSwitch from './../components/ToogleSwitch';

const GetStarted = () => {
  
  const [formType, setFormType] = useState('login')

  return (
    <>
    <div className='box'>
    <ToogleSwitch formType={formType} setFormType={setFormType}/>
      {formType === 'login' ?
      <Login/> :  <SignUp/>
      }
    </div>
    </>
  )
}

export default GetStarted