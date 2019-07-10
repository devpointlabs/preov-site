class Api::PostsController < ApplicationController
before_action :set_post, only:[:show, :destroy]

  def index
    render json: Post.all
  end

  def show
    post = {
      id: @post.id,
      title: @post.title,
      body: @post.body,
      image: @post.image,
      categories: Category.all,
      post_categories: @post.categories,
      updated_at: @post.updated_at

    }

    render json: post
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
        Category.find(c["id"]).posts << post
      end
      # render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def update
    post = Post.find(params[:id])
    title = params[:title] ? params[:title] : post.title
    body = params[:body] ? params[:body] : post.body
    image = params[:file] ? "" : post.image
    
    file = params[:file]
    if file != ""
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        image = cloud_image["secure_url"]
      rescue => e
        render json: { errors: e }, status: 422
      end
    end

    if post.update(title: title, body: body, image: image)
      categories = ActiveSupport::JSON.decode(params[:categories])
      post.categories.each do |p|
        if categories.include?(p["id"]) === false
          post.categories.delete(p)
      end
    end
      categories.each do |c|
        category = Category.find(c["id"])
        if category.posts.ids.include?(post.id)
          nil
        else
         category.posts << post
        end 
      end
      
  else
      render json: post.errors, status: 422
  end
end

  def destroy
    @post.destroy
    render json: Post.all
  end

  def filter_category
    render json: Post.filter_category(params[:id])
  end

  private
  def set_post
    @post = Post.find(params[:id])
  end
end

