# require 'pry'
#
# #  this is the bonus, it's a work in progress
#
# business = {}
# # customers = { 'ant': [] }
# # customers = { 'ant': ['cake','pudding'] }
# order = []
#
#
# puts "Name for order: "
# customer_name = gets.chomp
# # business["customer_name"] = [customer_name]
#
# puts "#{customer_name},what do you want to order: "
# item = gets.chomp
# order.push(item)
# # puts item
# # business["customer_name"].push(item)
# # order = [item1]
#
# puts "#{business[customer_name]} wants to order #{business["customer_name"][:item]}: "
#
# puts "Add another item to the order? (y/n)"
# more = gets.chomp
# while more == 'y' do
#   puts "Please add to my order some: "
#   extra = gets.chomp
#   customers = order = order << extra
#   puts "Add another item to the order? (y/n)"
#   more = gets.chomp
#   puts "Thank you #{name}. Enjoy your #{order}."
#   end
#




# this is the main task, it's working :)
new_name = 'y'
business = {}

while new_name == 'y' do
  order = []

  puts "Name for order: "
  name = gets.chomp

  puts "#{name}, what would you like to order?"
  item = gets.chomp
  order.push(item)

  puts "Add another item to the order? (y/n)"
  more = gets.chomp
  while more == 'y' do
    puts "Please add to my order some: "
    extra = gets.chomp
    order.push(extra)
    puts "Add another item to the order? (y/n)"
    more = gets.chomp
  end
  puts "Thank you #{name}. Enjoy your #{order}."
  business[name] = order
  puts "#{name}, are there any other people who'd like to order? (y/n)"
  new_name = gets.chomp
end

puts 'Enjoy your lunch!'
puts business["name"][:order]
