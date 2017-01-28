require('sinatra')
require('sinatra/contrib/all')
require('pry-byebug')
require_relative('./models/game')

get '/' do
  erb(:home)
end

get '/rock_paper_scissors/:choice' do
  game = Game.new(params[:choice])
  @result = game.winner
  return "#{game.player1}, #{game.player2} result: #{@result}"
end