Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json}  do
    resources :friends, only: [:create, :index]
    resources :users, only: [:create, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :bills, only: [:index, :create, :show, :update, :destroy]
    resources :bills, only: [:index, :create, :show, :update, :destroy]
    resources :sums, only: :index
  end
end
