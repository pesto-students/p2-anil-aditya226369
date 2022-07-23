function greet(start,end){
    console.log(start+" "+this.firstName+" "+this.lastName+", "+end);
}

var person1 = {
    firstName: "Aditya",
    lastName: "Chaudhari"
}
var person2 ={
    firstName: "Pesto",
    lastName: "Tech"
}

// bind
console.log("Output using bind:");
var bindGreetperson1 = greet.bind(person1);
var bindGreetperson2 = greet.bind(person2);
bindGreetperson1("Hello","How are you?");
bindGreetperson2("Hello","How are you?");
console.log();
// bind: 
// 	- creates another copy of function
// 	- can be used when we want to call a function with later arguments

// call
console.log("Output using call: ")
greet.call(person1,"Hello","How are you?");
greet.call(person2,"Hello","How are you?");
console.log();
// call:
// 	- do not creates copy it executes the same function
// 	- when we want to use function immediately with modifies arguments

// apply
console.log("Output using apply: ")
greet.apply(person1,["Hello","How are you?"]);
greet.apply(person2,["Hello","How are you?"]);
// apply: 
// 	- same as call just a difference is in call we can pass argument  by comma separated and in apply we can pass it in array.


// ---------------------------------------------------------------------------
// OUTPUT:-------------------------------
// PS F:\pesto-submissions\p2-anil-aditya226369\Week-3\Assingment-3.1> node .\callBindApply-3.2.js
// Output using bind:
// Hello Aditya Chaudhari, How are you?
// Hello Pesto Tech, How are you?      

// Output using call:
// Hello Aditya Chaudhari, How are you?
// Hello Pesto Tech, How are you?      

// Output using apply:
// Hello Aditya Chaudhari, How are you?
// Hello Pesto Tech, How are you?      