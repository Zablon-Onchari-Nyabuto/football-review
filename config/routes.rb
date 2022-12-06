Rails.application.routes.draw do
  resources :recipes, only: [:index, :create, :post,]
end
