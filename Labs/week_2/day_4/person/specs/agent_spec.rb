require 'minitest/autorun'
require 'minitest/rg'
require_relative '../agent'
require_relative '../person'

class TestAgent < MiniTest::Test
  def setup
    @agent = Agent.new("James", "Bond")  
  end

  def test_agent_takls_like_agent
    assert_equal("The name is Bond, James Bond",@agent.talk)
    
  end

end