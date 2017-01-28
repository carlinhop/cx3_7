require('minitest/autorun')
require('minitest/rg')
require_relative('../wand')

class TestWand < MiniTest::Test
  def setup
    @broken_wand = Wand.new("oak","unicorn hair")
    @elder_wand = Wand.new("holly","phoenix feather")
  end

  def test_get_wand_wood_type
    assert_equal("oak", @broken_wand.wood)
  end

  
end