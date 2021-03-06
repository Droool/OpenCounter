# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# USER
require 'faker'
require 'open-uri'

User.destroy_all
RestaurantCuisine.destroy_all
Cuisine.destroy_all
Restaurant.destroy_all
Review.destroy_all
Reservation.destroy_all

User.create!(
    email: "demo@personalbar.com", 
    fname: "Benjamin", 
    lname: "Jack", 
    password: "111111"
)

Cuisine::CUISINES.each { |category| Cuisine.create!(cuisine: category)}

80.times do 
    User.create!(
        email: Faker::Internet.unique.email, 
        fname: Faker::Name.unique.first_name, 
        lname: Faker::Name.last_name, 
        password: Faker::Internet.password
    )
end

# RESTAURANTS

PRICE_RANGE = ["$", "$$", "$$$", "$$$$"]
OPEN_TIME = ["8:00", "9:00", "10:00", "11:00", "12:00"]
CLOSE_TIME = ["20:00", "21:00", "22:00", "23:00"]
CUISINE_IDS = Cuisine.all.pluck(:id)

c = 1
20.times do
    restaurant = Restaurant.create(
        name: Faker::Restaurant.unique.name, 
        address: Faker::Address.street_address, 
        city: Restaurant::CITIES.sample,
        zip: Faker::Address.zip[0..4].to_s,
        lat: Faker::Address.latitude,
        lon: Faker::Address.longitude,
        phone_number: Faker::PhoneNumber.cell_phone, 
        price_range: PRICE_RANGE.sample, 
        description: Faker::Restaurant.description,
        cuisine_id: CUISINE_IDS.sample,
        open_time: OPEN_TIME.sample,
        close_time: CLOSE_TIME.sample,
        capacity: rand(80..120)
    )
    restaurant_image = open("https://s3.amazonaws.com/open-counter-seeds/#{c}.jpg")
    restaurant.photo.attach(io: restaurant_image, filename: "#{c}.jpg")
    c += 1
end

RESTAURANT_IDS = Restaurant.all.map { |restaurant| restaurant.id }
USER_IDS = User.all.map {|user| user.id}

Restaurant.all.each do |restaurant|
    RestaurantCuisine.create(
        restaurant_id: restaurant.id, 
        cuisine_id: restaurant.cuisine_id
    )
end

# REVIEWS
User.all.sort[1..-1].each do |user|
    40.times do 
        Review.create(
        user_id: user.id,
        restaurant_id: RESTAURANT_IDS.sample,
        overall_rating: (1..5).to_a.sample,
        food_rating: (1..5).to_a.sample,
        ambiance_rating: (1..5).to_a.sample,
        value_rating: (1..5).to_a.sample,
        service_rating: (1..5).to_a.sample, 
        noise_level: (1..3).to_a.sample,
        recommended: (0..1).to_a.sample,
        body: Faker::Restaurant.review
        )
    end
end

# RESERVATIONS
50.times do
    Reservation.create(
        user_id: User.first.id, 
        restaurant_id: RESTAURANT_IDS.sample,
        start_datetime: Faker::Time.between_dates(from: Date.today + 5, to: Date.today, period: :evening),
        party_size: (1..20).to_a.sample
    )
end