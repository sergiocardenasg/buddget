class Budget < ApplicationRecord
    has_many :expenses
    validates :name, presence: true
    validates :fund_amount, presence: true, numericality: { only_integer: true }
end
