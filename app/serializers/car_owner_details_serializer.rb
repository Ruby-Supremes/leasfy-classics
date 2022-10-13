class CarOwnerDetailsSerializer < ActiveModel::Serializer
  attributes :get_owners_email

  def get_owners_email
    self.email
  end
end
