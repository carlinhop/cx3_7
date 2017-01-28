class Person
  attr_reader :name, :last_name
  
  def initialize(name,last_name)
    @name = name
    @last_name =  last_name
    
  end

  def talk
    return "Hi I'm " + @name
    
  end
end