function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
   
  
    let newArray = birds.filter(function(bird) {
      return geese.indexOf(bird) === -1
    }) // with the filter we pass all the elements which satisfied our condition (indexOf),into a new array. Filter usually works with sth is truthy or falsey 
    return newArray
  }