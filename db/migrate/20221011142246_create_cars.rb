class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :name
      t.string :description
      t.integer :hiring_price
      t.string :owner_id
      t.boolean :availability_status

      t.timestamps
    end
  end
end
