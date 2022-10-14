class Reservation < ApplicationRecord
    validates :address, presence:true
    validates :no_of_days, presence:true
    validates :hiring_cost, presence:true
    validates :user_id, presence:true
    validates :start_date, presence:true
end
