class Adddefaultvaluetorating < ActiveRecord::Migration[7.0]
  def change
    change_column_default :cars, :rating, 0
  end
end
