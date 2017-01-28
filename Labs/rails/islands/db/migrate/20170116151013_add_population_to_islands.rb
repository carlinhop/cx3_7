class AddPopulationToIslands < ActiveRecord::Migration
  def change
    add_column :islands, :population, :int
  end
end
