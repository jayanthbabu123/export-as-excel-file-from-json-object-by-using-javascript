//es5 approach
function add() {
    //console.log(arguments);
    const args = Array.from(arguments);
    return args.reduce((acc, cur) => acc + cur);
}

//console.log(add(3, 4, 5, 6, 7, 8, 10, 40));   // 33

//es6 spread operator
function sum(...args){
    return args.reduce((acc, cur) => acc + cur);
}

console.log(sum(3, 4, 5, 6, 7, 8, 10, 40));  