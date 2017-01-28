require 'minitest/autorun'
require 'minitest/rg'
require_relative '../person'

class TestPerson < MiniTest::Test
  def setup
    @person = Person.new("Akira", "Kurosawa")
    
  end

  def test_person_has_name
    assert_equal("Akira", @person.name)
  end

  def test_person_has_last_name
    assert_equal("Kurosawa", @person.last_name)
  end

  def test_person_talks
    assert_equal("Hi I'm Akira", @person.talk)
  end

end