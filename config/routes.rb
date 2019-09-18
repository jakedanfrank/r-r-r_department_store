Rails.application.routes.draw do
  namespace :api do
    resources :stores do 
      resources :items
    end
  end
end
