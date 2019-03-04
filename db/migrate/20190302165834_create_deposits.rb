class CreateDeposits < ActiveRecord::Migration[5.2]
  def change
    create_table :deposits do |t|
      add_monetize :deposit_amount
      t.references :goal, foreign_key: true

      t.timestamps
    end
  end
end
