# https://gist.github.com/HMAN1911/98711902ff566e7d60ab870ac49ad012

deck = %w(A K Q J 10 9 8 7 6 5 4 3 2)

puts "Texas Hold 'em Poker!"
puts "How many players? (2-8)"
p deck
players = gets.chomp
p players

hand = players.rand(0..13)

# shuffle is a built ruby in method
# .shuffle returns the original deck which is now shuffled
# .shuffle! returns a copy of the original deck
