let x= prompt('Enter Password')
function passwordCheck(x){
    if(x.length > '12'){
        return "YOUR PASWORD IS TOO LONG";
    }
    if(x.length<'8'){
        return "YOUR PASSWORD IS TOO SHORT";
    }
    else{
        return "JUST RIGHT";
    }
}
console.log(passwordCheck(x))

