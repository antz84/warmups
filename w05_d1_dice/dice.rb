require 'pry'

puts 'hello'

class Dice
  def initialize
  end

  def roll(rolls)
    results = []
    start = 0
    while start < rolls do
      roll = rand(1..6)
      start += 1
      results << roll
    end
    return results
  end

  def sum
    sum = results.each.do.sum << results
  end
end

binding.pry
