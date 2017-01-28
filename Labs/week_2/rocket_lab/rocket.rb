class Rocket

  attr_accessor :name, :type, :destination,:fuel_tank, :status



  def initialize(name, type, destination, fuel_tank, status)
    @name = name
    @type = type
    @destination = destination
    @fuel_tank = fuel_tank
    @status = status
    end

  def rocket_fuel(fuel_amount = 0)
    @fuel_tank += fuel_amount
    

  end

  def launch()
    puts "brrrmmmmm.......=> Lift Off..Houston\n" +"All set for: " + @destination
    rocket_response = 'say -v Zarvox "Houston, ...Lift Off "'
    `#{rocket_response}`
    @status = "Flying"

  end



end