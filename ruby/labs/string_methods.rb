puts "Enter a string: "
str = gets.chomp
if str.size >= 20
    puts str.capitalize
elsif str.size >= 10
    puts str.upcase
else 
    puts str.downcase
end
