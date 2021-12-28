function greeting(name) {
    if (typeof(name) === "Boolean") {
        return "enter valid value"
    } else if (typeof(name) === "Number") {
        return "expected string but got number "
    }
    return "hello " + name;
};
console.log("56");
console.log(greeting("Bhagwant"));
console.log(false);