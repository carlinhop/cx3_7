require( 'sinatra' )
require( 'sinatra/contrib/all' )
require( 'pry-byebug' )
require_relative('./models/pizza') 

get '/pizzas' do
  @pizzas = Pizza.all()
  erb ( :index )
end

get '/pizzas/new' do 
  erb( :new )
end

post '/pizzas' do 
  @pizza = Pizza.new( params )
  @pizza.save() 
  erb( :create )
end

get '/pizzas/:id' do
  @pizza = Pizza.find(params[:id])
  erb(:show)
end

get '/pizzas/:id/edit' do
  @pizza = Pizza.find(params[:id])
  erb(:edit)
end

put '/pizzas/:id' do
  @pizza = Pizza.update(params)
  redirect to("/pizzas/#{params[:id]}")
end

delete '/pizzas/:id' do
  Pizza.destroy(params[:id])
  redirect to('/pizzas')
end