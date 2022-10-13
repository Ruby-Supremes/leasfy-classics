class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :name
      t.string :description
      t.boolean :availability_status, default:true
      t.integer :hiring_price
      t.belongs_to :user

      t.timestamps
    end
  end
end
