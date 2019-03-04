class Customer < ApplicationRecord
    has_many :goals

    validates :customer_name, presence: true
    validates :customer_name, uniqueness: true
end
