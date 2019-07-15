6.times do
  cat = Category.create(
    label: Faker::Educator.subject
  )

  4.times do
    post = Post.create(
    title: Faker::Marketing.buzzwords.titleize,
    body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Elit sed vulputate mi sit. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Vitae et leo duis ut diam quam nulla. Eu ultrices vitae auctor eu augue ut lectus arcu. Dolor magna eget est lorem ipsum. Tempus imperdiet nulla malesuada pellentesque. Ornare lectus sit amet est placerat in. Sagittis id consectetur purus ut faucibus pulvinar elementum integer.</p>
    <p>Et tortor consequat id porta nibh venenatis cras sed felis. Interdum varius sit amet mattis vulputate enim. Et netus et malesuada fames ac turpis. Amet nulla facilisi morbi tempus iaculis urna. Aliquet nec ullamcorper sit amet risus nullam. Porta nibh venenatis cras sed felis eget velit aliquet. Quis varius quam quisque id diam vel quam elementum. Placerat in egestas erat imperdiet sed euismod nisi porta. Tortor dignissim convallis aenean et tortor at. Adipiscing at in tellus integer. Semper feugiat nibh sed pulvinar. Pellentesque pulvinar pellentesque habitant morbi. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Gravida cum sociis natoque penatibus et magnis dis parturient. Amet porttitor eget dolor morbi. Eu mi bibendum neque egestas. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. At lectus urna duis convallis. Curabitur vitae nunc sed velit dignissim.</p>
    <p>Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Felis imperdiet proin fermentum leo vel. Tincidunt eget nullam non nisi est sit. Mi eget mauris pharetra et ultrices neque ornare. Nunc lobortis mattis aliquam faucibus purus in. Nisl suscipit adipiscing bibendum est. Blandit cursus risus at ultrices mi. Dolor sit amet consectetur adipiscing. Proin nibh nisl condimentum id venenatis a condimentum. Sagittis vitae et leo duis ut diam quam.</p>
    <p>Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. A lacus vestibulum sed arcu. Id leo in vitae turpis. Dictum varius duis at consectetur. Ac turpis egestas maecenas pharetra convallis. Lorem sed risus ultricies tristique nulla aliquet enim. Tincidunt id aliquet risus feugiat in. Ut etiam sit amet nisl purus in. Velit egestas dui id ornare arcu odio. Hendrerit dolor magna eget est lorem ipsum dolor. Diam phasellus vestibulum lorem sed risus ultricies. Elementum nibh tellus molestie nunc non blandit massa enim. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. In metus vulputate eu scelerisque. Facilisi morbi tempus iaculis urna id volutpat lacus. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Cras adipiscing enim eu turpis. Id faucibus nisl tincidunt eget nullam non nisi. Tortor posuere ac ut consequat. Sit amet massa vitae tortor condimentum lacinia quis vel eros.</p>",
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
      'https://res.cloudinary.com/dplpreov/image/upload/v1563226750/black-friday-fashion-friends-1345082_tfrunc.jpg',
      "https://res.cloudinary.com/dplpreov/image/upload/v1563226750/alcoholic-beverage-beverage-citrus-1232152_xp3hid.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1563226750/blur-close-up-dairy-product-376464_t3x6qk.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1563226750/carrots-carrying-colorful-1389103_zzqb7s.jpg",
      "https://res.cloudinary.com/dplpreov/image/upload/v1563226750/active-aerobics-balance-868483_tibmi7.jpg"
      ].sample)
    
      1.times do
        cat.posts << post
  
    end
  end
end

puts "6 Categories Containing 4 Posts Each Created"
