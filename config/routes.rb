Rails.application.routes.draw do
  devise_for :users
  root to: 'homes#top'
  resources :users, only: [:edit, :update]
  get 'users/my_page' => 'users#show', as: 'my_page'
  
  resources :albums, only: [:show, :create, :destroy]
end
