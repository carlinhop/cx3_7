
class BankAccount

  attr_accessor :holder_name, :amount, :type

  @@bank_name = "HSBC" 

  def initialize(holder_name, amount, type)
    @holder_name = holder_name
    @amount = amount
    @type = type
  end

  def pay_interest
    @amount += 10
  end

  def bank_name
    return @@bank_name
  end

end