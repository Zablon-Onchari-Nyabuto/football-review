class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        render json: User.all, status: :ok
    end

    def show
        hero = User.find(params[:id])
        render json: hero, status: :ok
    end

    private
    def record_not_found
        render json: {error: "User not found"}, status: 404
    end
end
