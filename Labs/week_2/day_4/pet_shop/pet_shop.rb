require_relative('pet')

class PetShop

  def initialize (input_pets)
    @pets = input_pets
  end

  def pet_type(name)
    
    result = @pets.find{|pet| pet.name==name}
    return result.type
  end

  def get_names_of_all_pets_of_type(type)
      result = []
      pets = @pets.select {|pet| pet.type==type}
      pets.each{|pet| result << pet.name}
      return result
  end

  def get_number_of_pets_costing_at_least(price)
    
    pets = @pets.select{|pet| pet.price>=price}
    return pets.count
  end

end