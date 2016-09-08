require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/view' do
  erb :view
end

get '/record' do
  erb :record
end
