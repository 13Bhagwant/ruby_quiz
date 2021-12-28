def pluck(array, key)
    keys = array.map do |hash|
      p hash[key]
    end
  end
  pluck([{a:'Bhagwant'}, {a:"Singh"}], :a) ## returns [1,2]
  pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) ## returns [nil, 4, 1, nil]
  pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) ## returns [2,4,nil,nil]  