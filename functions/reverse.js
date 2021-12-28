//Write a function which revers the the string
function reverse(string) {
    return string.split("").reverse().join("")
};
console.log(reverse("helloworld"));