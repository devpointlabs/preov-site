class DropPostCategory < ActiveRecord::Migration[5.2]
  def change
    drop_table :post_categories
  end
end
