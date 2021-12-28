const words = ['blue', 'apple', 'likes', 'bandaids'];
function sortArray(words){
    const arrCopy = Array.from(words)
    return arrCopy.sort()
}
function sortArray(words){
    return [...words].sort()
}
function sortArray(words){
    const arrCopy = Object.assign([], words)
    return arrCopy.sort()
}