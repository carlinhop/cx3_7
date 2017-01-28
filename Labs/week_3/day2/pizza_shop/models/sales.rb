require_relative('pizza_order')

class Sales
  def initialize(orders)
    @orders = orders
  end

  def total_revenue
    result = @orders.reduce(0){|sum, order| sum + order.quantity}
    return result * 10
  end

end