class CarsController < ApplicationController 
  def create
    car =  Car.create!(car_params)
    render json: car
end

def index
    cars = Car.all
    render json: cars
end

def show
    car = find_car
    render json: car
end

def update
    car = find_car
    car.update!(car_params)
    render json: car
end

def destroy
    car = find_car
    car.destroy
    head :no_content
end

private 

def car_params
    params.permit(:hiring_price,:description,:name,:owner_id)
end

def find_car
    Car.find(params[:id])
end

def render_not_found_response
    render json: { error: "Car not found" }, status: :not_found
end

def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
end

end
  
