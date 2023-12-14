import React, { useState, useEffect } from 'react';
import '../styles/GetStarted.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Login = ({ formType, setFormType, loader, setLoader }) => {
  const navigate = useNavigate();
  const handleToggle = () => {
    setFormType(formType === "signup" ? "login" : "signup");
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [user, loading] = useAuthState(auth);

  const handleSubmit = async (e) => {
    setLoader(true)
    e.preventDefault();

    await signInWithEmailAndPassword(auth, username, password)
      .then(() => {
        setUsername('');
        setPassword('');
        setLoader(false)
        navigate(`/user/${auth.currentUser.email}`);
      })
      .catch((error) => {
        setLoader(false)
          setMessage('csd');
          console.log(message);
        setUsername('');
        setPassword('');
      });
  };

  // Use useEffect to clear the message after a delay
  // useEffect(() => {
  //   if (message) {
  //     const timeoutId = setTimeout(() => {
  //       setMessage(null);
  //     }, 4000);

  //     // Cleanup the timeout to avoid memory leaks
  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [message]);

  return (
    <>
    <form className='loginForm form' onSubmit={handleSubmit}>
      <span className='text'>
        <h2 className="text-center">Welcome Back</h2>
        <p>We persistently strive to elevate and refine your experience, fostering innovation and collaboration for heightened satisfaction and convenience</p>
        <p>Not a User? <span onClick={handleToggle}>SignUp here</span></p>
        {/* <p className='error'>{message.message}hell</p>  */}
      </span>
      <div>
        {user && user.admin ? 'admin' : null}
        <div className="input-container">
          <input type="text" required onChange={(e) => { setUsername(e.target.value) }} value={username} autoComplete="username" aria-label='username' />
          <label className="label-n">Username</label>
        </div>
        <div className="input-container">
          <input type="password" required onChange={(e) => { setPassword(e.target.value) }} value={password} autoComplete="current-password" aria-label='password' />
          <label className={`label-n`}>Password</label>
        </div>
      </div>
      <span className="buttonsContainer">
        <button type="submit" className="submitBtn btn">
          Login
        </button>
      </span>
    </form>
    </>

  );
}

export default Login;
