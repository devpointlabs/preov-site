Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'


  namespace :api do
    resources :categories
    resources :posts
    get "filter_category/:id", to: "posts#filter_category"
    get "search_posts", to: "posts#search_posts"
  end

  get '*other', to: 'static#index'

end
