// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

/*
function sayHello(input){
    if(input === "Alex"){
        return "Hello, Alex!"
    }
    else if(input === 'Pat'){
        return "Hello, Pat!"
    }
    else{
        return "Hello, Jane!"
    }
}*/

/*
function sayHello(input){
    if(input === undefined){
        return("Hello, World!")
    }
    else if(input === true) {
        return ("Hello, World!")
    }
    else if(input === false){
        return ("Hello, World!")
    }
    return(`Hello, ${input}!`)
}*/

function sayHello(input){
    if(input === true || input === false || input === undefined){
        return "Hello, World!"
    }
    else{
        return (`Hello, ${input}!`)
    }
}



function isFive (input){
    if(input == 5){
        return true
    }
    else return false
}