10.times do
  cat = Category.create(
    label: Faker::Superhero.power,
  )

  5.times do
    post = Post.create(
    title: Faker::Book.title,
    body: Faker::Lorem.paragraph_by_chars(2000, false),
    image: [
      "https://res.cloudinary.com/dplpreov/image/upload/v1562953729/boy-children-couple-2253879_dygbzf.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562952735/baby-boy-child-1661818_sih1iz.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562952734/adult-aerobics-backlit-248139_eczhku.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562952734/assorted-diet-edible-247685_jqrdqo.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562951991/child-children-cute-160994_feilwr.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562951991/child-girl-kid-12165_smr0sr.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562963592/beautiful-blur-bridal-256737_ko0zan.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562963597/adorable-baby-baby-clothes-326583_o5khrc.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562963601/animal-cute-family-159864_hkjixs.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562963612/art-backlit-beach-256807_apfwbd.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562963616/beach-children-family-39691_vmncg2.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562966290/adorable-animal-animal-photography-1183434_wwyeva.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562966295/baby-shower-birthday-buffet-587741_h3in8u.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562966301/baby-clothes-blurred-background-clothesline-2565272_ct50yi.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562966308/adult-art-baby-235243_rl747q.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1562966313/adorable-animal-baby-230785_ypl6ln.jpg",
      ].sample)
    
      1.times do
        cat.posts << post
  
    end
  end
end

puts "10 Categories with 5 Posts Created"
