if (false) {
    let ourFirstFunction = function() {
        console.log('Life is Awesome');
    }
    ourFirstFunction();

    let name = 'Bhagwant'
    for (let x = 0; x < 10; x++) {
        console.log(x + " " + name);
    }
}

if (false) {
    //passing arguements to  a function
    let ourFirstFunctionWithArguments = function(name) {
        console.log('Hello ' + name);
    };
    //Passing arguments to function
    ourFirstFunctionWithArguments('Bhagwant');
    //passing arguments to a  function
    let name = '********'
    ourFirstFunctionWithArguments(name)
}
// Do it together -Cat Face
if (false) {
    let drawCats = function(catFace) {
        for (let i = 0; i < 10; i++) {
            console.log(i + " " + catFace);

        }
    }
    drawCats('(= ^ . ^ =)')
    drawCats('(=   ^   .   ^   =)')
}

//input from user
if (true) {
    let input = parseInt(process.argv[2]);
    let drawCats = function(howManyTimes) {
        for (var i = 0; i < howManyTimes; i++) {
            console.log(i + " " + "(= ^ . ^=)");

        }
    };
    drawCats(input);
}
