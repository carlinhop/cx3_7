class Game
  
  attr_reader :player1, :player2

  def initialize(choice)
    @moves = ["rock","paper", "scissors"]
    @player1 = choice
    @player2 = @moves[rand(3)] 
  end

  def winner()
    if @player1 == @player2
      return "Have another go"

    elsif @player1 == "rock" && @player2 == "scissors"
      return "You win!"
    elsif @player1 == "scissors" && @player2 == "paper"
      return "You win!"
    elsif @player1 == "paper" && @player2 == "rock"
      return "You win!"  
    else
      return "You lost"
    end
  end

end