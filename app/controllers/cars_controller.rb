class CarsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
 
    def create
        cars =  Cars.create!(user_params)
        render json: user
    end

    def index
        cars = Car.all
        render json: cars
    end

    def show
        car = find_Car
        render json: car
    end

    def update
        car = find_Car
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
        params.permit(:name,:description,:hiring_price,:availability_status,:user_id)
    end

    def find_car
        car.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Car not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

end
 

