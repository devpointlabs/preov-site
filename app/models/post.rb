class Post < ApplicationRecord
  has_and_belongs_to_many :categories

  def self.filter_category(id)
    find_by_sql(["
      SELECT posts.*
      FROM categories
      LEFT JOIN categories_posts as cp on categories.id = cp.category_id
      LEFT JOIN posts on cp.post_id = posts.id
      WHERE categories.id = ?
      ", id])
  end

  def self.search_posts(title, body)
    find_by_sql(["
    SELECT *
    FROM posts
    WHERE LOWER(title) LIKE LOWER(?) OR LOWER(body) LIKE LOWER(?)
    ", "%#{title}%", "%#{body}%"])
  end
end
