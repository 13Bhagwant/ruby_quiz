const obj = ['sdfdsf','sdf']
  
//   const key = "with space"
//   obj.key // undefined
//   obj["with space"] // hi
//   obj[key] // hi
  
  function getWordLengths(sentence) {
    const words = sentence.split(' ')
    const wordLengths = {}
    for (let word of words) {
        wordLengths[word] = word.length
    }
    return wordLengths
  }
  console.log(getWordLengths(obj));
  