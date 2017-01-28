require('minitest/autorun')
require('minitest/rg')
require_relative('../universe.rb')

class UniverseTest< MiniTest::Test

def setup
  @universe = {
    galaxies: [],
    spaceships: [],
    aliens: [],
    size: 9000000000
}
end

def test_add_galaxy()
  add_galaxy(@universe, "Milky Way")
  assert_equal("Milky Way", @universe[:galaxies].last)
end


end
