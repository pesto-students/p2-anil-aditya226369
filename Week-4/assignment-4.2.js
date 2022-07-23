var Person = function(){};

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}

// created a Teacher function and assigned it all the elements of Person 
var Teacher = function(){};
Teacher.prototype = new Person();

// created a teach method inside the Teacher class or can say under Person class
Teacher.prototype.teach = function(subject){
        console.log(this.name + " is now teaching " + subject);
}

// creating a object of Teacher class
var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");


// -----------------------------------------------------
// OUTPUT
// -----------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-4> node .\assignment-4.2.js
// Adam is now teaching Inheritance
