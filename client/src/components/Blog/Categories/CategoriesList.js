import React from 'react'
import Category from './Category'

const CategoriesList = ({ categories, editCategory, deleteCategory, }) => (
  <div>
    { categories.map( category =>
      <Category
        key={category.id}
        {...category}
        editCategory={editCategory}
        deleteCategory={deleteCategory}
      />
    )}
  </div>
)

export default CategoriesList;
