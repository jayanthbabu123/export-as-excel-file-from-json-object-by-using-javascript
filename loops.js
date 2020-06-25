

const arr = [...Array(50000).keys()];
//console.log(arr);
console.time("for")
var output = "";
for (var i = 0; i < arr.length; i++) {
    output = output + arr[i];
}

console.timeEnd("for");



console.time("for...of")
var output1="";
for(let value of arr){
  output1=output1+value
}

console.timeEnd("for...of");


var output2="";
console.time("forEach");
arr.forEach(value=>{
    output2=output2+value;
});
console.timeEnd("forEach");


