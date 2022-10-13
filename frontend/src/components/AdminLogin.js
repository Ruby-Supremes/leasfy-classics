import React,{ UseState } from 'react'
import { Link } from 'react-router-dom'

function adminLogin() {
    const [first, setfirst] = UseState('')
    const [last, setlast] = UseState('')
    const [user, setuser] = UseState('')
    const [pass, setPass] = UseState('')

    const handleSubmit =(e) => {
        e.preventDefault()
        console.log(user)
    
      } 

  return (
    <div>
        <>
        <form className='form1'>
        <label for="first-name">First name</label>
          <input
            value={first}
            type="first-name"
            placeholder="First Name"
            id="first-name"
            name="first-name"
         />
        <label for="last-name">Last Name</label>
          <input
            value={last}
            type="last-name"
            placeholder="Last Name"
            id="email"
            name="email"
        />
        <label for="user">Username</label>
          <input
            value={user}
            type="user"
            placeholder="Username"
            id="user"
            name="user"
        />
        <label for="Password">Password</label>
          <input
            value={pass}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
        />
          <button type="submit">signup</button>
        </form>
        {/* <h4> Already registered? <Link to={'/login'}>Login here</Link></h4> */}
      </>
    </div>
  )
}

export default adminLogin


