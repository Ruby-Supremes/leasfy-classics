Rails.application.routes.draw do
  resources :reviews
  get 'review/user_id'
  get 'review/content'
  resources :cars
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
end
