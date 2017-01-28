require 'minitest/autorun'
require 'minitest/rg'
require_relative '../app'

class TestApp < MiniTest::Test
  def test_adds_one_to_each_item
    assert_equal([2,3,4], add_one([1,2,3]))
  end

  # def test_multiplies_each_item_by_two
  #   assert_equal([2,4,6], multiply_by_two([1,2,3]))
  # end

  # def test_up_to_you_add
  #     assert_equal(2, up_to_you {1 + 1})
    
  # end
  def test_up_to_you_hello
    assert_equal("hello Craig", up_to_you {|name| "hello " + name})  
  end

  def test_map_multiply_each_item_by_two
    assert_equal([2,4,6], map([1,2,3]){|item| item * 2})
  end

  def test_map_add_one_each_item_by_two
    assert_equal([2,3,4], map([1,2,3]){|item| item + 1})
  end

  def test_array_map_add_one
    assert_equal([2,3,4], [1,2,3].map {|item| item+1})
  end

  def test_array_map_add_one
    assert_equal([2,3,4], [1,2,3].map do
      |item| item+1 end)
  end

  def test_each
    array = [1,2,3]
    result = []
    array.each do |item| 
      result << item
    end
    assert_equal([1,2,3], result)  
  end
end