# require 'pry'

loop do
  puts "Say something to Daniel.."
  input = gets.chomp

  if input.include? "?"
    puts "Sure."
  elsif input == ""
    "Fine. Be that way!"
  elsif input == input.upcase
    puts "Woah, chill out!"
  else
    puts "Whatever"
  end
end

# binding.pry
