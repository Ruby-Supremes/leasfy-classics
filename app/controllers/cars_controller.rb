class CarsController < ApplicationController 
   # POST /cars
  # POST /cars.json
  def create
    @car = Car.new(car_params)
    if @car.save
      flash[:success] = "New car added!"
      redirect_to @car
    else
      render :new
    end
  end 
    end
