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



function isFive(input){
    return input == 5;
}


function isEven(value){
    return value % 2 === 0;
}


function isVowel(input){
return input === `a` || input === `e` || input === `i` || input === `o` || input === `u` || input === `A` || input === `E` || input === `I` || input === `O` || input === `U`;
}



function add(input1 , input2){
    return (parseInt(input1) + parseInt(input2))

}