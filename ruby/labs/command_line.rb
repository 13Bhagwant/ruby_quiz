puts "How many sides does a hexagon have?"
puts "1=>five"
puts "2=>six"
puts "3=>seven"
answer_1 = gets.chomp
puts "What is 88 + 12"
puts "1=>100"
puts "2=>90"
puts "3=>110"
answer_2 = gets.chomp
puts "What r we learning today ?"
puts "1=> JS"
puts "2=>Python"
puts "3=>Ruby"
answer_3 = gets.chomp
correct_answers = 0
if answer_1 == "six" || answer_1 == "2"
  correct_answers += 1
end
if answer_2 == "100" || answer_2 == "1"
  correct_answers +=1
end
if answer_3 == "ruby" || answer_3 == "3"
  correct_answers +=1
end
puts "You scored #{(correct_answers / 3.0) * 100}%, you got #{correct_answers} out of 3 questions correctly"
