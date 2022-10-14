# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create([
    {first_name:"David",last_name:"Mwenje",username:"mwenje",email:"mwenje@gmail.com",password:"pass123",user_type:2},
    {first_name:"Martin",last_name:"Mwangi",username:"mart",email:"mart@gmail.com",password:"pass123",user_type:1},
    {first_name:"Maryann",last_name:"Onyango",username:"maryann",email:"maryann@gmail.com",password:"pass123",user_type:2},
    {first_name:"Faith",last_name:"Gatwiri",username:"prof",email:"prof@gmail.com",password:"pass123",user_type:1}
])