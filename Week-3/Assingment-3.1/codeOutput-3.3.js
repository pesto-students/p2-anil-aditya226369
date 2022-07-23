function createIncrement(){
    let count=0;
    function increment(){
        count++;
    }
    
    let message = `Count is ${count}`;
    function log(){
        console.log(message);
    }
    return [increment,log];
} 

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();


// Explanation: 
// The output will be "Count is 0".
// It will be 0 beacuse increment() function runs 3times not the message variable.
// Thats why in log() function count remains 0.
// If that message variable is in the increment function then the count has incremented.


// Output -----------------------------------------
// PS F:\pesto-submissions\p2-anil-aditya226369\Week-3\Assingment-3.1> node .\codeOutput-3.3.js
// Count is 0
