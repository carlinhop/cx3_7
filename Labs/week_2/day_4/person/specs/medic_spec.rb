require 'minitest/autorun'
require 'minitest/rg'
require_relative '../medic'
require_relative '../person'

class TestMedic < MiniTest::Test
  def setup
    @medic = Medic.new("Shaman", "Yanomami")
    @patient = Person.new("Carlos", "Pereira")
  end

  def test_medic_can_heal
    assert_equal("Carlos, you're cured", @medic.heal(@patient))
  end
end