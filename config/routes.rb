Rails.application.routes.draw do
  devise_for :users
  root to: 'homes#top'
  get 'users/my_page' => 'users#show', as: 'my_page'
  resources :users, only: [:edit, :update]

  resources :albums, only: [:show, :create, :destroy]
end