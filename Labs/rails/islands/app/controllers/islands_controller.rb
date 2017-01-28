class IslandsController < ApplicationController
  def index
    @islands = Island.all
    render:json => @islands 
  end

  def show(id)
    result = Island.find(5)
    render:json => result
  end

end