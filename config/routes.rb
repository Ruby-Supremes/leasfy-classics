Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # Users routes

  get '/users', to: 'users#index'
  get '/users/:id'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
end
