class SubjectsController < ApplicationController
  
  before_action :authenticate_user!
  def index
    subjects = current_user.subjects
    render :json => subjects
  end

end