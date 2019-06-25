class Api::PostsController < ApplicationController

  def index
    render json: Post.all
  end

  def create

  end

  def update
    
  end

  def destroy
  end
end
