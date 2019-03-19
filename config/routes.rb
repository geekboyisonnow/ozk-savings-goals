Rails.application.routes.draw do
  scope :api do
  resources :deposits
  resources :goals
  resources :customers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/customers/current', to: 'customers#current'
  end
end
