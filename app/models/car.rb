class Car < ApplicationRecord
    #belongs_to :Reservation
    #has_many  :Reviews

    validates :availability_status, presence: true, inclusion: {in: Availability_statuses}
  
    def isAvailable?
      availability_status == "True"
    end
    
    def isReserved?
      availability_status == "false" 
end
end
