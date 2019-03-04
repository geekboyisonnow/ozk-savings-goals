class Goal < ApplicationRecord
  belongs_to :customer
  has_many :deposit
end
