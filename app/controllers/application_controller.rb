class ApplicationController < ActionController::API
    include ActionController::Cookies

    def authorize
        unauthorized unless session.include? :user_id
    end

    def authorize_car_owner
        unauthorized(standard_user: false) unless session[:user_type] == "car_owner" || session[:user_type] == "admin"
    end

end
