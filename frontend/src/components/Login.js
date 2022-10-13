import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login(props) {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit =(e) => {
    e.preventDefault()
    console.log(email)

  } 
  return (
    <div className='form-container'>
      <>
        <form className='form2'>
          <label htmlfor="email">email</label>
          <input
            value={email}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlfor="Password">Password</label>
          <input
            value={pass}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          />
          <button className='button' type="submit">Log in</button>
        </form>
        <h4>Don't have an account? <Link to={'/signup'}>Signup here</Link></h4>
      </>
    </div>
  );
}

export default Login

