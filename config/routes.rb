Rails.application.routes.draw do
  devise_for :users
  root to: 'homes#top'
  get 'users/my_page' => 'users#show', as: 'my_page'
  resources :users, only: [:edit, :update]

  resources :albums, only: [:show, :create, :destroy]

  devise_scope :user do
    post 'users/guest_sign_in', to: 'users/sessions#new_guest'
  end

end