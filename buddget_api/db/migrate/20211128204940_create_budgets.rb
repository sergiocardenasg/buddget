class CreateBudgets < ActiveRecord::Migration[6.1]
  def change
    create_table :budgets do |t|
      t.string :name
      t.integer :fund_amount
      t.integer :expenses

      t.timestamps
    end
  end
end
