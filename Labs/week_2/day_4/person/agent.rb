require_relative 'person'

class Agent < Person

  def talk
    return "The name is " + @last_name + ", " + @name + " " + @last_name

    
  end
end