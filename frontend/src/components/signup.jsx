import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [userDetails, setUserDetails] = useState({
      first_name:'',
      last_name:'',
      username:'',
      email:'',
      password:'',
      user_type:0
    })
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

    const handleSubmit = (e) =>{

      e.preventDefault()
            fetch('http://localhost:3000/users',{
              method:"POST",
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
                first_name:userDetails.first_name,
                last_name:userDetails.last_name,
                username:userDetails.username,
                email:userDetails.email,
                password:userDetails.password,
                user_type:parseInt(userDetails.user_type)
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
      setUserDetails({
        ...userDetails,
        [event.target.name]: event.target.value,
        
      });
    }
    console.log(userDetails)

  return (
    <div className='form-container'>
    <>
    <h2>Signup</h2>
        <form className='form1' onSubmit={handleSubmit}>
        <label for="first_name">First name</label>
          <input
            type="first_name"
            placeholder="First Name"
            id="first_name"
            name="first_name"
            onChange={handleChange}
         />
        <label for="last_name">Last Name</label>
          <input
            type="last_name"
            placeholder="Last Name"
            id="last_name"
            name="last_name"
            onChange={handleChange}
        />
         <label for="username">User Name</label>
          <input
            type="username"
            placeholder="UserName"
            id="username"
            name="username"
            onChange={handleChange}
        />
        <label for="email">email</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            onChange={handleChange}
        />
        <div className='sync'> 
        <select name="user_type" onChange={handleChange} value={userDetails.user_type} aria-label="Default select example">
          <option value="1">Car Owner</option>
          <option value="0">Client</option>
      </select>   
      </div>       
        <label for="Password">Password</label>
          <input
            type="password" 
            placeholder="*******"
            id="password" 
            name="password"
            onChange={handleChange}
        />
          <button type="submit">signup</button>
        </form>
        <h4> Already registered? <Link to={'/login'}>Login here</Link></h4>
      </>
    </div>
  )
}

export default Signup
