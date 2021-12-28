user = {
    first_name:'',
    last_name:'',
    birth_city:'',
    age:''
}
for key in user.each_key do
    puts "#{key}"
    user[key] = gets.chomp
end
p "your name is #{ user[:first_name]} #{user[:last_name]} age is #{user[:age]} belong's to #{user[:birth_city]}"




