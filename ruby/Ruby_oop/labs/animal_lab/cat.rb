require_relative './animals.rb'

class Cat < Animals
    def eat
        super
        "Fish is yummy!"
    end
end

c=Cat.new("meaw","Blck")
p c.name
p c.color
c.eat