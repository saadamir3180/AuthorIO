import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import '../styles/Page.css'
import { auth } from '../firebaseConfig'
const User = () => {

     
  const param = useParams()
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    setEmail(param.email)
  }, [param.email])


  return (
    <div>{auth.currentUser.displayName} check</div>
  )
}

export default User