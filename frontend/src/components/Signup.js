import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns'

function Signup() {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [user, setUser] = useState('')
    // const [errors, setErrors] = useState([])

    // const handleSubmit (e){
    //     e.preventDefault()
    //     const user = {
    //       first,
    //       last,
    //       email,
    //       pass
    //     }
    //     fetch(`/user`,{
    //       method:"post",
    //       headers:{'Content-Type':'application/json'},
    //       body:JSON.stringify(user)
    //     })
    //     .then( res =>{
    //       if(res.ok){
    //         res.json().then(setCurrentUser)
    //       } else {
    //         res.json().then( e => setErrors(object.entries(e.errors.flat())))
    //       }
    //     })
    
    //   } 

  return (
    <div className='form-container'>
    <>
    <h2>Signup</h2>
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
            id="last-name"
            name="last-name"
        />
         <label for="user-name">User Name</label>
          <input
            value={user}
            type="user-name"
            placeholder="User Name"
            id="user-name"
            name="user-name"
        />
        <label for="email">email</label>
          <input
            value={email}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
        />
        <div className='sync'> Usertype<DropDownListComponent dataSource={["Admin","owner","client"]}></DropDownListComponent></div>
       
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
        <h4> Already registered? <Link to={'/login'}>Login here</Link></h4>
      </>
    </div>
  )
}

export default Signup
