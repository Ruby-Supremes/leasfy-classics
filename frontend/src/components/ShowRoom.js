import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { CarCard } from './CarCard';

function ShowRoom() {
    const navigate = useNavigate();
    function moveToCarDetails(e){
        e.preventDefault();
        navigate('/car_details')
        // navigate('/car_details'+ '/'+ carId, {state: {carId : carId}})
    }
    
    // fetching carlist from the database

    const [carlist, setCarList] = useState(null);
    useEffect(() => {
    fetch(`http://localhost:3000/cars`)
        .then((r) => r.json())
        // .then((carlist) => setCarList(carlist));
        .then((res) => setCarList(res));
    }, []);
    // if (!carlist) return <h5 className='text-secondary'>Loading car list...</h5>;

    // seting the carid parameters
    // let {carId} = useParams()

  return (
    <div>
      <div className="title container">Popular choices</div>
        <div className="popular-choice container-fluid m-3">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                    <div className="card">
                        <img src="https://i.pinimg.com/originals/d3/10/c9/d310c93f195a81340a07269f3de46184.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Car title</h6>
                        <p className="card-text float-start">⭐ 5</p>
                        <p className="btn btn-sm btn-secondary card-text float-end" onClick={moveToCarDetails}>Check it out..</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8a014846125609.5607c343e139c.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title">Car title</h6>
                            <p className="card-text float-start">⭐ 5</p>
                        <p className="btn btn-sm btn-secondary card-text float-end" onClick={moveToCarDetails}>Check it out..</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://cdn.luxe.digital/media/2021/11/26104936/best-classic-cars-vintage-old-luxe-digital%402x.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title">Car title</h6>
                            <p className="card-text float-start">⭐ 5</p>
                        <p className="btn btn-sm btn-secondary card-text float-end" onClick={moveToCarDetails}>Check it out..</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8a014846125609.5607c343e139c.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title">Car title</h6>
                            <p className="card-text float-start">⭐ 5</p>
                        <p className="btn btn-sm btn-secondary card-text float-end" onClick={moveToCarDetails}>Check it out..</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="clear"></div>
        <div className="container">
        <div className="row row-cols-md-2">
            <div className="col-md-2">
                <div className="categories">
                    <div className="title container">Categories</div>
                    <ul className="list-group">
                        <li className="list-group-item">Category 1</li>
                        <li className="list-group-item">Category 2</li>
                        <li className="list-group-item">Category 3</li>
                        <li className="list-group-item">Category 4</li>
                        <li className="list-group-item">Category 5</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-10">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4">

                        {carlist?.map(car=>(
                            <CarCard key={car.id} car={car}/>
                        )) }
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ShowRoom
