class ReviewsController < ApplicationController
      # GET /reviews
  def index
    reviews = Review.all
    render json: reviews
  end

  # GET /reviews/:id
  def show
    review = Review.find_by(id: params[:id])
    render json: review
  end

  # POST /reviews
  def create
    user = User.find(session[:user_id])
    review = Review.create(username: review_params[:username], match: review_params[:match], date: review_params[:date], description: review_params[:description]
    )
    render json: review, status: :created
  end

  # PATCH /reviews/:id
  def update
    review = Review.find_by(id: params[:id])
    review.update(review_params)
    render json: review
  end

  # DELETE /reviews/:id
  def destroy
    review = Review.find_by(id: params[:id])
    review.destroy
    head :no_content
  end

  private

  def review_params
    params.permit(:username, :match, :date, :description)
  end
end
