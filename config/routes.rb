Rails.application.routes.draw do
  resources :reviews
  resources :users
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
