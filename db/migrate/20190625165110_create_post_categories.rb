class CreatePostCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :post_categories do |t|
      t.belongs_to :post, foreign_key: true
      t.belongs_to :category, foreign_key: true

      t.timestamps
    end
  end
end
