10.times do
  cat = Category.create(
    label: Faker::Superhero.power,
  )

  5.times do
    post = Post.create(
    title: Faker::Book.title,
    body: Faker::Lorem.paragraph_by_chars(1000, false),
    image: [
      "https://res.cloudinary.com/dplpreov/image/upload/v1562953729/boy-children-couple-2253879_dygbzf.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562952735/baby-boy-child-1661818_sih1iz.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562952734/adult-aerobics-backlit-248139_eczhku.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562952734/assorted-diet-edible-247685_jqrdqo.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562951991/child-children-cute-160994_feilwr.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562951991/child-girl-kid-12165_smr0sr.jpg",
      ].sample)
    
      1.times do
        cat.posts << post
  
    end
  end
end

puts "10 Categories with 5 Posts Created"
