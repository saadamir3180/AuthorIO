import React, { useState } from 'react'
import '../styles/GetStarted.css'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,
  debugErrorMap,
  sendEmailVerification,
  updateProfile } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { dataBase } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const SignUp = ( { formType, setFormType } ) => {
  const handleToggle = () => {
    setFormType(formType === "signup" ? "login" : "signup");
  };


  const [user, loading ] = useAuthState(auth)
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [check, setCheck] = useState(false)
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const registerUser = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      if(userCredential.user)
      updateProfile(userCredential.user, {
        displayName: name,
      })
      sendEmailVerification(auth.currentUser).then(()=>{
      setResetEmailSent(true)})
    })
    .catch((error) => {
      console.log(error.code, error.message)
    })
    
    setUsername('')
    setPassword('')
    setName('')
    setCheck(false)
  }                 
  return (
    <form className='signupForm form' onSubmit={registerUser} >
    {/* <h2 className="text-center">Sign Up for AuthorIO</h2> */}
    <span className='text'> 
        <p>Your Standards define who you are</p>
        <h2 className="text-center">Sign Up for AuthorIO</h2>
        <p>Already a User? <span onClick={handleToggle}>Login instead</span></p>
        </span>
    <div className='inputsContainer'>
    {/* <div className="input-container">
      <input type="text" required onChange={nameHandler} value={name}/>
      <label className='label-n'>Name</label>
    </div> */}
    <div className="input-container">
      <input type="text" required onChange={(e)=>{setName(e.target.value)}} value={name} aria-label='name' autoComplete="username"/>
      <label className='label-n'>Name</label>
    </div>
    <div className="input-container">
      <input type="text" required onChange={(e)=>{setUsername(e.target.value)}} value={username} aria-label='username' autoComplete="username"/>
      <label className='label-n'>Email Adress</label>
    </div>
    <div className="input-container">
      <input type="password" required onChange={(e)=>{setPassword(e.target.value)}} value={password} 
      autoComplete="new-password" aria-label='password'
      />
      <label className='label-n'>Password
      </label>
    </div>
    {/* <div className="input-container">
      <input type="name" required onChange={companyNameHandler} value={companyName} />
      <label className='label-n'>Company Name</label>
    </div> */}
    <div className="inputCheckboxContainer">
      <input type="checkbox" value={check} onChange={()=>{setCheck(!check)}}/>
      <label className='forCheckBox'>Are you a writer?</label>
    </div>
    </div>
    <span className="buttonsContainer">
      {/* {!resetEmailSent ? null :  */}
      <button type="submit" className="btn">
      Submit
    </button>
    {/* } */}
    </span>
    {resetEmailSent && (
        <div className="message">
          <p>Verification Email sent. Check your inbox & then Login</p>
          <button onClick={()=>{setResetEmailSent(!resetEmailSent);navigate('/GetStarted')}}>ok</button>
        </div>
      )}
  </form>
  )
}

export default SignUp