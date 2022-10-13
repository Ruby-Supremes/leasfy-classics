class ReviewsController < ApplicationController
   rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
        def index
            render json: Review.all, status: :ok
        end
        def show
            review = Review.find_by!(id: params[:id])
            render json: review, status: :ok
        end
        def update
            review= Review.find_by!(id: params[:id])
            review.update(user_review: params[:user_review])
            render json: review, status: :accepted
        end
        def create
            review = Review.create!(review_params)
            render json: review, status: :created
        end
        private
        def review_params
            params.permit :user_review, :user_id, :blog_id
        end
        def unprocessable_entity_response(invalid)
            render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end
    end
    
    
    
    
    
    
    
       

