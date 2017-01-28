require('pry-byebug')
require('pg')



class PizzaOrder
  attr_reader :first_name, :last_name, :topping, :quantity

  def initialize(options)
    @id = options['id'].to_i if options['id']
    @first_name = options['first_name']
    @last_name = options['last_name']
    @topping = options['topping']
    @quantity = options['quantity'].to_i
  end

  def save
    db = PG.connect({dbname: 'pizza_shop', host: 'localhost'})
    sql = "insert into pizza_orders(

      first_name,
      last_name,
      topping,
      quantity) values (
      '#{@first_name}',
      '#{@last_name}',
      '#{@toppings}',
      #{@quantity}
      
    );"

    db.exec(sql)
    db.close
  end

  def self.all

    db= PG.connect({dbname: 'pizza_shop', host: 'localhost'})
    sql = "select * from pizza_orders;"
    result = []
    db.exec(sql).each{|row| result << PizzaOrder.new(row)}

    db.close
    return result
  end

  def update
    db= PG.connect({dbname: 'pizza_shop', host: 'localhost'})

    sql = "update pizza_orders
    set first_name = '#{first_name',
  
    
  end

end


# binding.pry
# nil