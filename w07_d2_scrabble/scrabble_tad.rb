# Tads code from Slack

class Scrabble
  def score(word)
  score = 0

  one = 'aeioulnrst'
  two = 'dg'
  three = 'bcmp'
  four = 'fhvwy'
  eight = 'jx'
  ten = 'qz'

  word.downcase.split('').each do |letter|
    if one.index(letter) != nil
      score += 1
    elsif two.index(letter) != nil
      score += 2
    elsif three.index(letter) != nil
      score += 3
    elsif four.index(letter) != nil
      score += 4
    elsif eight.index(letter) != nil
      score += 8
    elsif ten.index(letter) != nil
      score += 10
    end
  end

  return score
  end
end

s = Scrabble.new

puts s.score("aaaa")
