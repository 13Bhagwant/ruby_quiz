str="hello"
reverse_greeting = ""
str.length.times do |i|
  reverse_greeting.insert(i, str[-1-i].chr)
end
p reverse_greeting

p '************ Method 2 ***********'
greeting = 'hello'
greeting.length # gives us length of string
last_index = greeting.length - 1
reverse = []
last_index.downto(0) do |num|
  reverse << greeting[num]
end
p reverse.join