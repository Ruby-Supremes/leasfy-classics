class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.string :address
      t.date :start_date
      t.integer :no_of_days
      t.integer :hiring_cost
      t.belongs_to :user

      t.timestamps
    end
  end
end
