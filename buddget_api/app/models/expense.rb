class Expense < ApplicationRecord
    belongs_to :budget
    validates :name, presence: true
    validates :amount, presence: true, numericality: { only_integer: true }
end
