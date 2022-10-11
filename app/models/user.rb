class User < ApplicationRecord
    enum :user_type, {standard_user:0,car_owner:1,admin:2}
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, uniqueness: true, presence: true
    validates :username, uniqueness: true, presence: true
    has_secure_password
end
