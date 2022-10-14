import React from 'react'
import { Link } from 'react-router-dom'

export const CarCard = ({car}) => {
  return (
    <div className="col btn">
    <div className="card">
        <img src={car.image1} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h6 className="card-title font-weight-bold text-left">{car.name}</h6>
        <h6 className="card-text text-left">{car.availability_status ? <span className='text-success'>Car is available</span> : <span className='text-danger'>not available</span>}</h6>
        <p className="card-text float-start">$ {car.hiring_price}</p>
        <p className="card-text float-end">⭐ {car.rating}</p>
        <Link to={`/car-details/${car.id}`}><button className="btn btn-secondary">View car details</button></Link>

        </div>
    </div>
</div>
  )
}
