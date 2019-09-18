20.times do
  s = Store.create(
    name: Faker::Cannabis.strain
 )
 50.times do
  i = Item.create(
    name: Faker::Commerce.product_name,
    description: Faker::Hipster.sentence,
    price: Faker::Commerce.price.to_f,
    store_id: s.id
  )
  end
 end
  puts  "Seeded"
