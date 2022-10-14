import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function CarDetails() {
    const [car, setCar] = useState("")

    const {id} =  useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/cars/${id}`)
        .then(res => res.json())
        .then(res => setCar(res))
    }, [id])
    console.log(car)
  return (
    <div>
        <div className="container">
            <div className=" row intro-head">
                <div className="title-head mx-3">Car Title</div><br/>
                <div className="title-head">
                    <span>⭐ 5 . Number of reviews . car location</span><br/>
                </div>
            </div>
            <div className="image-reference mt-3">
                <div className="row gx-5">
                <div className="col-md-6 main-image"><img src={car.image1}/></div>
                <div className="col-md-6 sub-images">
                    <div className="row row-cols-2 row-cols-md-2 g-4">
                    {/* <div className="col"><img src="https://www.carcovers.com/media/carcover/resource/classiccar.jpg"/></div> */}
                    <div className="col"><img src={car.image2}/></div>
                    <div className="col"><img src={car.image3}/></div>
                    <div className="col"><img src={car.image4}/></div>
                    <div className="col"><img src={car.image5}/></div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row detailed mt-5">
                <div className="col-8">
                    <div className='row'>
                        <span className='hr hr-blurry'>
                            <div className='owner-details float-start'>
                                <h6 className='font-weight-bold'>{car.name}</h6>
                                <h6><span className='font-weight-bold'>Contact :</span><br/>Email: loremipsum@gmail.com<br/> Phone: +254451515151</h6>
                            </div>
                            <img className="float-end user-avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SnDtnoTbs_JJtNW62ALeA4gKPtpCGcQ5CnVEJNNAddxjuLwrbo1c16rExrxYL4xLmIw&usqp=CAU"/>
                        </span>
                    </div><hr/>
                    <div className='summary Details mt-5'>
                    <div className="title-head">{car.description}</div>
                        <table class="table mt-2">
                            <tbody>
                                <tr>
                                    <td>field</td>
                                    <td>Description</td>
                                </tr>
                                <tr>
                                    <td>field</td>
                                    <td>Description</td>
                                </tr>
                                <tr>
                                    <td>field</td>
                                    <td>Description</td>
                                </tr>
                                <tr>
                                    <td>field</td>
                                    <td>Description</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Sed semper mauris consectetur, tincidunt tellus varius, 
                             commodo purus. Sed varius, odio a feugiat porta, 
                             felis nunc fringilla enim, nec accumsan lorem dui pretium justo. 
                             Aenean faucibus orci quis leo tempus consequat. Aenean eu urna nec mauris dictum ultricies. 
                             Aenean bibendum tortor in cursus vulputate</p>
                    </div>
                    <div className='reviews'>
                        <div className="title-head mt-2">Reviews</div>
                        <div className='row mt-3'>
                            <span className='hr hr-blurry'>
                                <img className="col-2 user-avatar float-start" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SnDtnoTbs_JJtNW62ALeA4gKPtpCGcQ5CnVEJNNAddxjuLwrbo1c16rExrxYL4xLmIw&usqp=CAU"/>
                                <div className='owner-details col-10 float-end'>
                                    <p>John Doe</p>
                                    <p>Sed semper mauris consectetur, tincidunt tellus varius, 
                                commodo purus. Sed varius nunc fringilla enim, nec accumsan lorem dui pretium justo. 
                                Aenean faucibus orci </p>
                                </div>
                            </span>
                        </div><hr/>
                        <div className='row mt-3'>
                            <span className='hr hr-blurry'>
                                <img className="col-2 user-avatar float-start" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SnDtnoTbs_JJtNW62ALeA4gKPtpCGcQ5CnVEJNNAddxjuLwrbo1c16rExrxYL4xLmIw&usqp=CAU"/>
                                <div className='owner-details col-10 float-end'>
                                <p>Jane Doe</p>
                                    <p>Sed semper mauris consectetur, tincidunt tellus varius, 
                                commodo purus. Sed varius nunc fringilla enim, nec accumsan lorem dui pretium justo. 
                                Aenean faucibus orci quis leo tempus consequat. Aenean eu urna nec mauris dictum ultricies. 
                                Aenean bibendum tortor in </p>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-2 mx-auto">
                <div class="card">
                    <div class="card-body bg-dark text-light rounded-lg">
                        <div className='row'>
                            <div class="col-6">
                                <p className="card-text float-start">$ 0.00</p>
                            </div>
                            <div class="col-6">
                                <p className="card-text float-end">⭐ 5</p>
                            </div>
                        </div>
                        <div className="reserve-form mt-3">
                            <form className='form row'>
                                <div class="col-4">
                                    <label className='col-form-label'>Days</label>
                                </div>
                                <div class="col-8">
                                    <input type="number" class="form-control"/>
                                </div>
                                <div class="col-12 mt-3">
                                    <input type="submit" value="Reserve" class="form-control btn btn-sm btn-secondary"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarDetails
