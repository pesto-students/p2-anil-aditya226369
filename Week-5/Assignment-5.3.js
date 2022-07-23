const set = new Set();

// creating dupicate function
const hasDuplicate=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(set.has(arr[i])){
            return true;   
        }else{
            set.add(arr[i]);
        }
    }
    return false;
}

const arrT = [1,2,3,4]; //Test1: no duplicate returns false
const arrF = [1,-1,1,3]; //Test2: contains duplicate returns true

console.log("Test for arrT which doen't have duplicate values: ");
console.log(hasDuplicate(arrT));
console.log("Test for arrF which have duplicate values: ");
console.log(hasDuplicate(arrF));


// --------------------------------------------------
// OUTPUT
// --------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-5> node .\Assignment-5.3.js
// Test for arrT which doen't have duplicate values: 
// false
// Test for arrF which have duplicate values: 
// true