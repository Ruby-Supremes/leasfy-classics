class CarsController < ApplicationController 
    
    validates :availability_status, presence: true, inclusion: {in: Availability_statuses}
  
    def isAvailable?
      availability_status == "True"
    end
    
    def isReserved?
      availability_status == "true"
    end
    
end
