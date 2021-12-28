Array.prototype.map = function(callback) {
    let newArray = [];
    let x = this.length;
    for (let i = 0; i < x; i++) {
      let counter = callback(this[i]);
      newArray.push(counter);
    }
    return newArray;
  };
// Iterative version

function map(arr, cb) {
    const output = []
    for (let element of arr) {
        output.push(cb(element))
    }
    return output
}