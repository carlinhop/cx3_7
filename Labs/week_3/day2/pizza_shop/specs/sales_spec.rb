require('minitest/autorun')
require('minitest/rg')
require_relative('../models/sales')
require_relative('../models/pizza_order')

class TestSales < MiniTest::Test
  def setup
    orders = PizzaOrder.all
    @sales = Sales.new(orders)
  end

  def test_total_revenue
    results = @sales.total_revenue
    assert_equal(110, results)
  end
end