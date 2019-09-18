class Api::ItemsController < ApplicationController
 before_action: set_store

  def index
    render json: @store.items 
  end



end
