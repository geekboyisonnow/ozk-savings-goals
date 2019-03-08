class AddAuthSubToCustomer < ActiveRecord::Migration[5.2]
  def change
    add_column :customers, :auth_sub, :text
  end
end
