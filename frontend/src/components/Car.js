import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

function Car() {
    const [model, setModel] = useState('')
    const [owner, setOwner] = useState('')
    const [location, setLocation] = useState('')
    const [charge, setCharge] = useState('')
    const [description, setDescription] = useState('')


  return (
    <div className='form-container'>
     <>
     <h2>Car Details</h2>
        <form className='form1'>
        <label for="car-model">Car Model</label>
          <input
            value={model}
            type="car-model"
            placeholder="car-model"
            id="car-model"
            name="car-model"
         />
        <label for="owner-id">Owner Id</label>
          <input
            value={owner}
            type="owner-id"
            placeholder="owner-id"
            id="owner-id"
            name="owner-id"
        />
         <label for="location">Location</label>
          <input
            value={location}
            type="location"
            placeholder="location"
            id="location"
            name="location"
        />
        <label for="charge">Charges</label>
          <input
            value={charge}
            type="charge"
            placeholder="charges"
            id="charge"
            name="charge"
        />
        <label for="description">Description</label>
          <input
            value={description}
            type="description"
            placeholder="Description"
            id="description"
            name="description"
        />
          <button type="submit">signup</button>
        </form>
        
    </>
    </div>
  )
}

export default Car
