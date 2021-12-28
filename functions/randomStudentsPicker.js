let students = ['Simran', 'Navjot', 'Jasleen']
let randomNamePicker = function(arrayOfStudent) {
    let randomIndex = Math.floor(Math.random() * students.length)
    console.log(randomIndex);

    return arrayOfStudent[randomIndex]
    console.log(students);

};
console.log(randomNamePicker(students));