import React, { useState } from 'react'

function Home() {
  const slides = [
    {url: "https://cdn.luxe.digital/media/2021/11/26104812/best-classic-cars-vintage-Aston-Martin-DB5-1964-old-luxe-digital%402x.jpg", 
    title: "Top Vintage"},
    {url: "https://cdn.luxe.digital/media/2021/11/26104936/best-classic-cars-vintage-old-luxe-digital%402x.jpg",
     title: "1965 Aston Martin DB5 - British Racing Green"},
    {url: "https://www.classic-motor-cars.co.uk/wp-content/uploads/2021/06/Kaizen-hero.jpg", 
    title: "Aston Martin DB5"}
  ]
  const [currentslide, setCurrentSlide] = useState(0)

  const containerStyles = {
    width: "auto",
    height: "65vh",
    margin: "0 auto"
  }
  const sliderMain ={
    height: '100%',
    position: 'relative'
  }
  const slideStyles = {
    width: "100%",
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    opacity: 0.7,
    backgroundImage:  `url(${slides[currentslide].url})`
  }

  const leftArrow={
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%',
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer'
  }

  const rightArrow={
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer'
  }
  const carTitle={
    position: 'absolute',
    bottom: '5%',
    transform: 'translate(0, -50%',
    right: '35%',
    left: '35%',
    fontSize: '35px',
    color: '#fff',
    zIndex: 1,
    fontFamily: 'sans-serif'
  }

  const goPrevious =() =>{
    const isFirstSlide = currentslide === 0;
    const newSlide = isFirstSlide ? slides.length - 1: currentslide - 1;
    setCurrentSlide(newSlide);
  }

  const goNext = () => {
    const isLastSlide = currentslide === slides.length -1;
    const newSlide = isLastSlide ? 0 : currentslide + 1;
    setCurrentSlide(newSlide);
  }
  return (
<<<<<<< HEAD
    <div>
      {/* <h4>Home</h4> */}
    </div>
=======
    <>
      <div style={sliderMain}>
        <div style={leftArrow} onClick={goPrevious}>&#60;</div>
        <div style={rightArrow} onClick={goNext}>&#62;</div>
        <div style={carTitle}>{slides[currentslide].title}</div>
        <div style={containerStyles}>
          <div style={slideStyles}></div>
        </div>
        
      </div>
      <div className='container mt-4'>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          <div className='col-6 abt-image mt-5'>
            <img src="https://thatsminorcustoms.com/wp-content/uploads/2020/10/blue-white-car-3.png"/>
          </div>
          <div className='col-6 mt-5'>
            <span className='abt-title mt-3'>Why Leasify</span> 
            <p className='abt-body mt-3'>Finding classic cars to lease for special occasions has proven
             to be a huge challenge for car fanatics, We aim at making the process of requesting car leasing 
              for classic cars a smooth and easy process for customers.</p>
            <div></div>
          </div>
        </div>
      </div>
      <div className='container-fluid main-footer'>
      <div class="main-footer">
          <div class="main-footer-content">
              <div class="footer-column">
                  <i class="fa-brands fa-linkedin-in"></i>
                  <i class="fa-brands fa-twitter-square"></i>
                  <i class="fa-brands fa-facebook-square"></i>
                  <i class="fa-brands fa-pinterest-square"></i>
              </div>
          </div>
          <p>Copyright &copy 2022 All rights reserved to Leasify Org</p>
      </div>
      </div>
    </>
>>>>>>> 5f0bcafae2d7377eb6ac05ad7c1db9f90931baab
  )
}

export default Home
