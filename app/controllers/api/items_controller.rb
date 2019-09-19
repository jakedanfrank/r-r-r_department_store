class Api::ItemsController < ApplicationController
  before_action: set_store
  before_action: set_item, only: [:show, :update, :destroy]

  def index
    render json: @store.items 
  end

  def show
    render json: @item
  end

  def create
    item = @store.item.new(item_params)
      if item.save
        render json: item
      else
        render json: item.errors, status: 422
      end
  end

  def update
    if @item.update(item_params)
      render json: store.item
    else
      render json: store.items.errors, status: 422
    end
  end

  def destroy
    @item.destroy
    render json: { message: "Item Deleted" }
  end

  private
  
  def set_store
    @store = Store.find(params[:id])
  end

  def set_items 
    @item = Item.find(params[:id])
  end 

  def item_params
    params.require(:item).permit(:name, :description, :price)
  end
end
