import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

function Client() {
    const [first, setfirst] = useState('')
    const [phone, setphone] = useState('')
    const [address, setaddress] = useState('')
    const [email, setemail] = useState('')
    const [license, setlicense] = useState('')

    const handleSubmit =(e) => {
        e.preventDefault()
        console.log(email)
    
      } 

  return (
    <div>
        <>
        <form className='form1'>
        <label for="name">Name</label>
          <input
            value={first}
            type="name"
            placeholder="Name"
            id="name"
            name="name"
         />

        <label for="email">email</label>
          <input
            value={email}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
        />
         <label for="Password">ID/License</label>
          <input
            value={license}
            type="license"
            placeholder="ID/License"
            id="license"
            name="license"
        />
        <label for="phone">Phone Number</label>
          <input
            value={phone}
            type="phone"
            placeholder="phone"
            id="phone"
            name="phone"
        />
        <label for="address">Address</label>
          <input
            value={address}
            type="address"
            placeholder="address"
            id="address"
            name="address"
        />

          <button type="submit">signup</button>
        </form>
        {/* <h4> Already registered? <Link to={'/login'}>Login here</Link></h4> */}
      </>
    </div>
  )
}

export default Client

