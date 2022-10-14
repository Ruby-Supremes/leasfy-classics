# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create([
    # {first_name:"David",last_name:"Mwenje",username:"mwenje",email:"mwenje@gmail.com",password:"pass123",user_type:2},
    # {first_name:"Martin",last_name:"Mwangi",username:"mart",email:"mart@gmail.com",password:"pass123",user_type:1},
    # {first_name:"Maryann",last_name:"Onyango",username:"maryann",email:"maryann@gmail.com",password:"pass123",user_type:2},
    {first_name:"Faith",last_name:"Gatwiri",username:"prof",email:"prof@gmail.com",password:"pass123",user_type:1}
])

# Car.create([
#     {name:"1972 DODGE CHALLENGER", description:"1972 dodge challenger
#         UK registered
#         318ci v8
#         3 speed automatic
#         very good factory spec car
#         power steering
#         high back sports seats
#         floor change with centre consul
#         rallye wheel
#         rev gauge and a few other factory items
#         lots of new parts fitted include
#         gearbox rebuilt",hiring_price:20000, user_id:1,image1:"https://assets.carandclassic.com/uploads/cars/dodge/C1510322/1972-dodge-challenger-6343ecb05145a.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=1d57dbc4fdc1507b17f664b891e16412",image2:"https://assets.carandclassic.com/uploads/cars/dodge/C1510322/1972-dodge-challenger-6343ecb051836.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=7c57ba5f60c850c566c7fed5a73f3260",image3:"https://assets.carandclassic.com/uploads/cars/dodge/C1510322/1972-dodge-challenger-6343f063a828d.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=54bd53e6e757298465081a33a530d959",image4:"https://assets.carandclassic.com/uploads/cars/dodge/C1510322/1972-dodge-challenger-6343f1e945346.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=a7aedd385a027f253ec64b5f13c535c4",image5:"https://assets.carandclassic.com/uploads/cars/dodge/C1510322/1972-dodge-challenger-6343ecb0510c1.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=fe9ed1a11635d59e65f2c4413f7fa2fb",rating:4},
#         {name:"1926 MORRIS COWLEY BULLNOSE", description:"Fully restored
#             Excellent condition throughout
#             Engine rebuilt 133 miles ago ",hiring_price:25000, user_id:1,image1:"https://assets.carandclassic.com/listing-assets/morris/cowley/1926-morris-cowley-bullnose-gLaWDn-v2/F0IYSN4vuZnLiZWbQ0sAC5oK5s4EKLw1p14NdBQw.jpg?ar=16%3A9&auto=compress&fit=crop&h=338&ixlib=php-3.3.1&q=75&w=600&s=0f9be2524c769072d6af929b5c7bf531",image2:"https://assets.carandclassic.com/listing-assets/morris/cowley/1926-morris-cowley-bullnose-gLaWDn-v2/RvOveCJWfFeOFn3PwOnTFskE6cJwD8FKZOrc9lMD.jpg?ar=16%3A9&auto=compress&fit=crop&h=338&ixlib=php-3.3.1&q=75&w=600&s=fb86f6f57f0eb160479e6a3c27a8236e",image3:"https://assets.carandclassic.com/listing-assets/morris/cowley/1926-morris-cowley-bullnose-gLaWDn-v2/OyVCFRc6fCdQyYmH2iEBVCeyqutTBUGDbgj12btX.jpg?ar=16%3A9&auto=compress&fit=crop&h=338&ixlib=php-3.3.1&q=75&w=600&s=a6096ba6d64fe29aa0bd4b81979791e3",image4:"https://assets.carandclassic.com/listing-assets/morris/cowley/1926-morris-cowley-bullnose-gLaWDn-v2/QC2AAjrEFTdtBQAbnG2dUQUsIUfViWspiFJywOjd.jpg?ar=16%3A9&auto=compress&fit=crop&h=338&ixlib=php-3.3.1&q=75&w=600&s=9ec10e2f759468ee5eadb0ee1c060922",image5:"https://assets.carandclassic.com/listing-assets/morris/cowley/1926-morris-cowley-bullnose-gLaWDn-v2/umw1GsmnF4InWDzoClMrD2uoJUwsOp5pdZANnIgK.jpg?ar=16%3A9&auto=compress&fit=crop&h=338&ixlib=php-3.3.1&q=75&w=600&s=bf06048ae4130c964ab4158d0b3c1de0",rating:4},
#             {name:"1966 JAGUAR E TYPE S1 RHD", description:"Fully restored
#                 Excellent condition throughout
#                 Engine rebuilt 133 miles ago ",hiring_price:45000, user_id:2,image1:"https://assets.carandclassic.com/uploads/cars/jaguar/C1483742/1966-jaguar-e-type-62e8dee002ab6.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=3433e905b1d1950678d3dc5c268224dd",image2:"https://assets.carandclassic.com/uploads/cars/jaguar/C1483742/1966-jaguar-e-type-62e8dee003b56.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=7f269916fbd8231d58f55c94c6ffd770",image3:"https://assets.carandclassic.com/uploads/cars/jaguar/C1483742/1966-jaguar-e-type-62e8dee0034d4.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=e0acacb575182cdb9207d98af8913a08",image4:"https://assets.carandclassic.com/uploads/cars/jaguar/C1483742/1966-jaguar-e-type-62e8dee003189.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=42f1c46ff7c4dcbb2dcec79936b56252",image5:"https://assets.carandclassic.com/uploads/cars/jaguar/C1483742/1966-jaguar-e-type-62e8dee002e91.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=1368da92238f12397fa1d77e566f123c",rating:5},
#                 {name:"1968 GORGEOUS 68 MUSTANG",description:"As you can see this car is in great condition throughout and offers the new owner a fabulous entry into the iconic Ford Mustang Classic Club.

#                     Price to sell, this must be the best priced Mustang Coupe in the country for the overall condition. If you don't believe me come take a look....
                    
#                     Having a new interior throughout including - new front and rear seat covers - new dash & dials - new headliner - new door cards - new door/ window handles - new front door & rear stereo speakers. iPod connection with amplifier for great music sound.
#                     ",hiring_price:30000,user_id:3,image1:"https://assets.carandclassic.com/uploads/cars/ford/C1490976/1968-ford-mustang-63024c6f1dd39.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=f557d6aca049670d18dde4b0bf277ca1",image2:"https://assets.carandclassic.com/uploads/cars/ford/C1490976/1968-ford-mustang-63024c6f1e0af.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=2297de1347a615bcfb9b1f7e04a795a9",image3:"https://assets.carandclassic.com/uploads/cars/ford/C1490976/1968-ford-mustang-63024c6f1e33e.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=0536e9ee2ec483fb1ec35e9ed457cdaf",image4:"https://assets.carandclassic.com/uploads/cars/ford/C1490976/1968-ford-mustang-63024c6f1e68c.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=56e02d963c0cd5e8e5f801bd1ccfcbf6",image5:"https://assets.carandclassic.com/uploads/cars/ford/C1490976/1968-ford-mustang-63024c6f1f2bb.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=28e2fb18c6727461485f4e2b87a7538c"},
#                 {name:"MG MGA CABRIOLET",description:"Extensively restored MG MGA Cabriolet
#                     This MG comes from a true enthusiast who has devoted his entire life to restoring English classic cars, including a lot of MGs. The MGA that we offer for sale here has been extensively restored and is both optically and technically in very good condition. A photo report of the restoration is available.
#                     ",hiring_price:50000,user_id:3,image1:"https://assets.carandclassic.com/uploads/cars/mg/C1511697/1956-mg-mga-6347f6723d53e.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=474ad9da23817ac229da48fb73458243",image2:"https://assets.carandclassic.com/uploads/cars/mg/C1511697/1956-mg-mga-6347f6723e40a.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=b4223497f7fb2256eec48554582fe626",image3:"https://assets.carandclassic.com/uploads/cars/mg/C1511697/1956-mg-mga-6347f6723eb0b.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=d5ab92e64aadc17488e01b4ae66e31ff",image4:"https://assets.carandclassic.com/uploads/cars/mg/C1511697/1956-mg-mga-6347f6723f202.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=8b423d58bdd8bfd1fcc1b3228f359864",image5:"https://assets.carandclassic.com/uploads/cars/mg/C1511697/1956-mg-mga-6347f6723f8fd.jpg?ar=4%3A3&auto=&fill=blur&fit=fillmax&h=600&ixlib=php-3.3.1&max-w=800&q=75&w=800&s=1bf2db1aedfcc71233af82a819b7fefa"}
# ])

