class ReviewsController < ApplicationController
      # GET /reviews
  def index
    reviews = Review.all
    render json: plants
  end

  # GET /reviews/:id
  def show
    review = Review.find_by(id: params[:id])
    render json: review
  end

  # POST /reviews
  def create
    review = Review.create(review_params)
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
