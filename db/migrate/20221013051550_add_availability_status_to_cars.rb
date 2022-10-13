class AddAvailabilityStatusToCars < ActiveRecord::Migration[7.0]
  def change
    add_column :cars, :availability_status, :boolean
 
  end
end
