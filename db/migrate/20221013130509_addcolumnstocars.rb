class Addcolumnstocars < ActiveRecord::Migration[7.0]
  def change
    add_column :cars, :image1, :string
    add_column :cars, :image2, :string
    add_column :cars, :image3, :string
    add_column :cars, :image4, :string
    add_column :cars, :image5, :string
    add_column :cars, :location, :string
    add_column :cars, :rating, :integer
  end
end
