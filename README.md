# Leasfy classics
## Project setup
```
bundle install
rails db:migrate db:seed
npm install --prefix frontend
```
## Start api server
```
rails s
```
## Start frontend 
```
npm start --prefix frontend
```
# test main branch

# Routes  
#Users
## Get all users
```
GET '/users'
```
## Get individual user
 ```
GET '/users/:id'
```
## Create new user
 ```
POST '/users'
```
## Update user
 ```
PATCH '/users/:id'
```
## Delete user
 ```
DELETE '/users/:id'
```
# Cars
## Get all cars
```
GET '/cars'
```
## Get individual car
 ```
GET '/car/:id'
```
## Create new car
 ```
POST '/cars'
```
## Update car
 ```
PATCH '/cars/:id'
```
## Delete car
 ```
DELETE '/cars/:1'
