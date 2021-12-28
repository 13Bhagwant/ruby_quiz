def repeated_num (arr)
    previous_values = {}
    for i in 0...arr.length
        if (previous_values[arr[i]] != nil)
            return previous_values[arr[i]]
        else
           previous_values[arr[i]] = arr[i]
        end
    end       
end
p repeated_num

p '********************'
a = Array(1..100) # creates an array of size 5000 that contains elements 1 to 5000
a[50] = 4 #  duplicate number 23 in postion 4500
# duplicate searching code:
a.sort!
a.each.with_index do |num, i|
  if num == a[i + 1]
    p "FOUND"
    puts num
    break
  end
end
