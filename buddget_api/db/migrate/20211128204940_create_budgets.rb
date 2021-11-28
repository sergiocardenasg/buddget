class CreateBudgets < ActiveRecord::Migration[6.1]
  def change
    create_table :budgets do |t|
      t.string :name
      t.int :fund_amount
      t.int :expenses

      t.timestamps
    end
  end
end
