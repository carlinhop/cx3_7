require('minitest/autorun')
require('minitest/rg')
require_relative('../rocket')

class TestRocket< MiniTest::Test


  def test_rocket_fuel
    rocket = Rocket.new("R1", "interplanetary", "Mars", 100, "Not deployed")
    tank = rocket.rocket_fuel()
    assert_equal(100,tank)
    tank = rocket.rocket_fuel(10)
    assert_equal(110,tank)
  end

  def test_launch
    rocket = Rocket.new("R1", "interplanetary", "Mars", 100, "Not deployed")

    rocket.launch
    assert_equal("Flying", rocket.status)

  end

end