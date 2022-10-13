Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # global options responder -> makes sure OPTION request for CORS endpoints work
  match '*path', via: [:options], to: lambda {|_| [204, { 'Content-Type' => 'text/plain' }]}
  # Defines the root path route ("/")
  # root "articles#index"
  # Users routes
  resources :cars
  resources :users
  # get '/users', to: 'users#index'
  # get '/users/:id', to: 'users#show'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
end