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
## Get all users
```
GET '/users'
```
## Get individual user
 ```
GET '/users/:1'
```
## Create new user
 ```
POST '/users'
```
## Update user
 ```
PATCH '/users/:1'
```
## Delete user
 ```
DELETE '/users/:1'
```