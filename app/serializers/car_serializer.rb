class CarSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :availability_status, :hiring_price,:user_id,:rating,:image1,:image2,:image3,:image4,:image5
end
