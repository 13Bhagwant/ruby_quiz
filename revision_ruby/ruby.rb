# time_now = 1
# unless time_now < 12
#     print "keep learning Ruby!"
# end
# p time_now

# a = [1, 2, 3]
# a.permutation.to_a    
# p a  
a = [1,2,3,4,5,6]
def even
    a.select {|num| num.even? } 
end
p a