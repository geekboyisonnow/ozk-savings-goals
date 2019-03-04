Rails.application.routes.draw do
  resources :deposits
  resources :goals
  resources :customers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
