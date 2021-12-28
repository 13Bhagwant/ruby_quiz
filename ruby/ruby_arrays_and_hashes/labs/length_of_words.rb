words = ["houses", "pets", "streets", "lakes", "mountains"]

word_count = []
words.each do |word|
  word_count << word.length
end

p word_count
# [6, 4, 7, 5, 9] 🥳

# hash table version

cache = {}

words.each do |word|
  cache[word] = word.length
end

p cache
