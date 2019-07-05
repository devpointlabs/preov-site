class Api::PostsController < ApplicationController
before_action :set_post, only:[:show, :update, :destroy]

  def index
    render json: Post.all
  end

  def show
    render json: @post
  end

  def create
    post = Post.new
    post.title = params[:title] ? params[:title] : post.title
    post.body = params[:body] ? params[:body] : post.body
  
    file = params[:file]
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        post.image = cloud_image["secure_url"]
      rescue => e
        render json: { errors: e }, status: 422
      end
    end
    if post.save
      categories = ActiveSupport::JSON.decode(params[:categories])
      categories.each do |c|
        Category.find(c).posts << post
      end
      render json: post
    else
      render json: post.errors, status: 422
    end

  end

  def update
    post = Post.find(params[:id])
    post.title = params[:title] ? params[:title] : post.title
    post.body = params[:body] ? params[:body] : post.body
  
    file = params[:file]
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        post.image = cloud_image["secure_url"]
      rescue => e
        render json: { errors: e }, status: 422
      end
    end
    if post.save
      categories = ActiveSupport::JSON.decode(params[:categories])
      categories.each do |c|
        Category.find(c).posts << post
      end
      render json: post
    else
      render json: post.errors, status: 422
    end

  end

  def destroy
    @post.destroy
  end

  private
  def set_post
    @post = Post.find(params[:id])
  end

  # def post_params
  #   params.require(:post).permit(:title, :body, :image)
  # end

end
