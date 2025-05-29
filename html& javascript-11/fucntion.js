console.log( 'this is a s3 fucntion');


 function greet(name, greetText='Greetings from javascript'){
    let name1 = "Name1";
    console.log(greetText + "" + name);
    console.log(name + " is a good boy ");
 }

function sum(a,b,c){
    let d = a + b+ c;
    return d;
    //this line will never execute (Unreachable code)
    // console.log("Function is returned");

}

let name = " karol";
let name1 = " ajay";
let name2 = " pradhan";
let name3 = " ravi";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);
// let returnVal = greet(name3);
// console.log(returnVal);

let returnVal = sum(1,2,3);
console.log(returnVal);
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");