Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'


  namespace :api do
    resources :categories
    resources :posts
    get "filter_category/:id", to: "posts#filter_category"
  end

end
