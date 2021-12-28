//iterative exponentation
function pow(base, exp) {
    for (let i = 0; i <= exp; i++) {
        result *= base
    }
    return result
}
//recursive exponation
function pow(base, exp) {
    if (exp === 1)
        return base
    return base * pow(base, exp - 1)
}
console.log(pow(5,3));

          //////or\\\\\\
function pow(base,expo){
    if (expo === 1) return base
    return base*pow(base,expo -1)
}
console.log(pow(2,5));
