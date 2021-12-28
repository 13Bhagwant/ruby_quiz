if (false) {
    fifthLetter = function(name) {
        if (name.length <= 5) {
            return 'your name is short'
        }
        return 'The fifth Letter of your name is ' + name[4]
    }
    let name = 'Bhagwant'
    console.log(fifthLetter(name));
}
//medalForScore
if (true) {
    let medalForScore = function(score) {
        if (score < 3) { return 'Bronze' }
        if (score < 7) { return 'Silver' }
        return 'Gold';
    };
    let score = 3
    console.log(medalForScore(score));
}