require('minitest/autorun')
require('minitest/rg')
require_relative('../duck.rb') 

class TestDuck < MiniTest::Test
  def setup
    @duck = Duck.new
  end

  def test_duck_can_fly()
    assert_equal("duck flying", @duck.fly())
  end

  def duck_has_2_legs
    assert_equal(2, @duck.num_legs)
  end

end