require_relative('../db/sql_runner')
class Pizza
  attr_reader :first_name, :last_name, :quantity, :topping, :id
  
  def initialize(params)
    @id = nil || params["id"].to_i
    @first_name = params["first_name"]
    @last_name = params["last_name"]
    @quantity = params["quantity"].to_i
    @topping = params["topping"]
  end

  def full_name
    return "#{@first_name} #{@last_name}"
  end

  def total
    return @quantity * 10
  end

  def save
    sql = "insert into pizzas(
      first_name,
      last_name,
      topping,
      quantity) values(
      '#{@first_name}',
      '#{@last_name}',
      '#{@topping}',
      #{@quantity}) returning *"
    pizza_data = SqlRunner.run(sql)
    @id = pizza_data.first['id'].to_i
  end

  def self.all
    sql = "select * from pizzas;"
    pizzas = SqlRunner.run(sql)
    result  = pizzas.map{|pizza| Pizza.new(pizza)}
    return result
    
  end


end