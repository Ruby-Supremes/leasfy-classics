class CarsController < ApplicationController 
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    before_action :authorize
    before_action :authorize_car_owner
    skip_before_action :authorize_car_owner, only: [:index,:show]

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
      params.permit(:description,:name,:user_id,:hiring_price, :availability_status)
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