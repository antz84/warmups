# https://gist.github.com/HMAN1911/a0ae6fe562714d97a04a52cd786ed3a2

require 'pry'
# require'./robot.rb'

class Robot
  attr_accessor :name

  def initialize
   @name = serial    # the @name bit is called an instance variable
  end

  def serial
   (0...2).map { ('A'..'Z').to_a[rand(26)] }.join + (0...3).map{rand(0..9)}.join
  end

  def reset
   @name = serial
  end
end

binding.pry
