def map(arr)
    output=[]
    for string in arr
        output << yield(string)
       
    end
    puts "output:#{output}"
    output
end

 map(['a','b','c']) {|string| string.upcase}