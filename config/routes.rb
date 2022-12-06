Rails.application.routes.draw do
  resources :reviews, only: [:index, :create, :post, :destroy]
end
