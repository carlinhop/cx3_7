class AddWeaponToAnimal < ActiveRecord::Migration
  def change
    add_column :animals, :weapon, :string
  end
end
