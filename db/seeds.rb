# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Car.create!([
    {name:"Peter Parker", description:"Spider-Man", hiring_price:""},
    {name:"Peter Parker", description:"Spider-Man", hiring_price:""},
    {name:"Peter Parker", description:"Spider-Man", hiring_price:""},
    {name:"Peter Parker", description:"Spider-Man", hiring_price:""},
    {name:"Peter Parker", description:"Spider-Man", hiring_price:""},
    {name:"Peter Parker", description:"Spider-Man", hiring_price:""},
    {name:"Peter Parker", description:"Spider-Man", hiring_price:""},


   ])
#review seeding
   Review.create!([
    {user_id:12, content:"the car is luxurious and have easy manuals"},
    {user_id:3, content:"you made this possible"},
    {user_id:4, content:"i cant thank you more"},
    {user_id:14, content:"comfortable ride"},
    {user_id:13, content:"i cant get enough of this"},

   ])