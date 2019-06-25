class Post < ApplicationRecord
  has_many :post_categories, dependent: :destroy
  has_many :categories, :through => :post_categories, dependent: :destroy
end
