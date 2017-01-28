class PlanetsController < ApplicationController

  def index
    @my_planets = [{name: "Mercury"},{name: "Venus"}]
    render :json => @my_planets
  end

end