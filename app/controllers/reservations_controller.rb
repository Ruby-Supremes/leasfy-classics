class ReservationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize

    def create
        reservation =  Reservation.create!(reservation_params)
        render json: reservation
    end
    
    # def index
    #     reservations = Reservation.all
    #     render json: reservations
    # end

    # def show
    #     reservation = find_reservation
    #     render json: reservation
    # end

    # def update
    #     reservation = find_reservation
    #     reservation.update!(reservation_params)
    #     render json: reservation
    # end

    def destroy
        reservation = find_reservation
        reservation.destroy
        head :no_content
    end
    
    private 
    
    def reservation_params
        params.permit(:address,:start_date,:no_of_days,:hiring_cost,:user_id)
    end
    
    def find_reservation
        Reservation.find(params[:id])
    end
    
    def render_not_found_response
        render json: { error: "Reservation not found" }, status: :not_found
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
