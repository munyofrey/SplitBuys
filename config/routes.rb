Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json}  do
    resources :friends, only: [:create, :index, :show]
    resources :users, only: [:create, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :bills, only: [:index, :create, :show, :update, :destroy] do
      resources :comments. only: [:index, :create, :destroy]
    end
    resources :sums, only: :index
  end
end
