class Game
    attr_accessor :name
    attr_accessor :players
    attr_accessor :time
    def initialize ()
        @name 
        @players 
        @time 
    end

end

game_001 = Game.new
game_001.name = 'Football'
game_001.players = ["Bhagwant", "Bawan"]
game_001.time = 'Night'

game_002 = Game.new
game_002.name = "hockey"
game_002.players = ["Tarshveer Singh", "Chanpreet Singh"]
game_002.time = 'Midnight'

game_003 = Game.new
game_003.name = "Cricket"
game_003.players = ["Anson Lam", "Brandon Lam"]
game_003.time = 'Afternoon'

class Stadium < Game

    def initialize ()
        @games =[]
    end

    def add_game(game)
        @games << game
    end
    
    def list
        value = [];
        for g in @games
            value << g 
        end
        return value
    end
end
bhambri = Stadium.new
bhambri.add_game(game_001)
bhambri.add_game(game_002)
bhambri.add_game(game_003)
p bhambri