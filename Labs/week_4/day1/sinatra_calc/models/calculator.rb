class Calculator

  def initialize(num1, num2)
    @num1 = num1
    @num2 = num2
  end

  def add
    @num1 + @num2
  end

  def subtract
    @num1 - @num2
  end

  def multiply
    @num1 * @num2
  end

  def divide
    if (@num2 != 0)
      return @num1/@num2
    else "Not possible"
    end
  end

end