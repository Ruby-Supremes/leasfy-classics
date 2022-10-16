import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [loginDetails, setLoginDetails] = useState({
        email:'',
        password:''
    })

  
    const handleSubmit =(e) => {
      e.preventDefault()
      fetch('http://localhost:3000/login',{
              method:"POST",
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
                email:loginDetails.email,
                password:loginDetails.password,
              })
            })
            .then( res =>{
              if(res.ok){
                res.json().then(res => console.log(res))
              } else {
                res.json().then( e => console.log(e))
              }
              res.json()
            }).then(r=>console.log(r))
        }


    function handleChange(event) {
        setLoginDetails({
          ...loginDetails,
          [event.target.name]: event.target.value,
          
        });
      }
  
    return (
      <div className='form-container'>
        <>
        <h2>Login</h2>
          <form className='form2' onSubmit={handleSubmit}>
            <label htmlfor="email">email</label>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              onChange={handleChange}
            />
            <label htmlfor="Password">Password</label>
            <input
              type="password"
              placeholder="*******"
              id="password"
              name="password"
              onChange={handleChange}
            />
            <button className='button' type="submit">Log in</button>
          </form>
          <h4>Don't have an account? <Link to={'/signup'}>Signup here</Link></h4>
        </>
      </div>
    );
  }
  export default Login;