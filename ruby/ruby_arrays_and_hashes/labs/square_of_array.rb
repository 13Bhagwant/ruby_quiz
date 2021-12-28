array = [[2,3,4], [5,6,7], [6,7,8]]
squared_array = array.map do | sub_array |
  sub_array.map do |n|
    n ** 2
  end
end
p squared_array