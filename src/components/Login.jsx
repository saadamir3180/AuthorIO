import React, { useState } from 'react'
import '../styles/GetStarted.css' 
import SignUp from './SignUp';
const Login = ({ formType, setFormType }) => {
  // const navigate = useNavigate()
  const handleToggle = () => {
    setFormType(formType === "signup" ? "login" : "signup");
  };
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) =>{
    e.preventDefault()
    // auth ? auth.signOut : null
    // await signInWithEmailAndPassword(auth, username, password)
    // .then(()=>{
    //   setUsername('')
    //   setPassword('')
    //   navigate(`/user/${auth.currentUser.email}`)
    // })
    // .catch((error)=>{
    //   console.log(error)
    //   setPassword('')
    // })
  }

  return (
      <form className='loginForm form' onSubmit={handleSubmit}>
        <span className='text'> 
        <h2 className="text-center">Welcome Back</h2>
        <p>We persistently strive to elevate and refine your experience, fostering innovation and collaboration for heightened satisfaction and convenience</p>
        <p >Not a User? <span onClick={handleToggle}>SignUp here</span></p>
        </span>
        <div>
        <div className="input-container">
          <input type="text" required onChange={(e)=>{(setUsername(e.target.value))}} value={username} autoComplete="username" aria-label='username'/>
          <label className="label-n">Username</label>
        </div>
        <div className="input-container">
          <input type="password" required onChange={(e)=>{(setPassword(e.target.value))}} value={password}  autoComplete="current-password" aria-label='password'/>
          <label className="label-n">Password</label>
        </div>
        </div>
        <span className="buttonsContainer">
          <button type="submit" className="submitBtn btn">
          Login
        </button>
        </span>
      </form> 
  )
}

export default Login