require('sinatra')
require('sinatra/contrib/all')

get '/hi' do
  return "<h1>Hello World!</h1>"
end


get '/roll-die' do
  return "#{rand(6)}"
end

get '/name/:title'  do
  return "Your title is #{params[:title]}" 
end

get '/name/:firs_name/:last_name'  do
  puts params
  return "Your name is #{params[:firs_name]} #{params[:last_name]}" 
end

get '/square/:number'  do
  nums = params['number'].to_i
  return "#{nums**2}"
end

