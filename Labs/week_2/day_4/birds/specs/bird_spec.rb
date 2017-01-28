require 'minitest/autorun'
require 'minitest/rg'
require_relative '../behaviours/chirp'
require_relative '../behaviours/quack'
require_relative '../behaviours/fly'
require_relative '../bird'


class TestBird < MiniTest::Test

  def setup
    quack_object =  Quack.new
    fly_object = Fly.new
    @duck = Bird.new(quack_object, fly_object)

    chirp_object = Chirp.new
    @sparrow = Bird.new(chirp_object, fly_object)

  end

  def test_duck_can_quack
    assert_equal("quack", @duck.call)

  end

  def test_sparrow_can_chirp
    assert_equal("chirp", @sparrow.call)
  end
end
