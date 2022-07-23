const str="12132142";
// const str = "122214";
const arr = str.split("");

function queuePop(arr){
    let revStack=[]; // original stack
    while(arr.length>0){
        revStack.push(arr.pop());
    }
    return revStack;
}

let newArr = []; //new stack used to make last element first
let res = []; // contains result pop elements
for(let i=0;i<arr.length;i++){
    if(arr[i]==1){
        newArr.push(arr[i+1]);
        i++;
    }else{
        newArr = queuePop(newArr);
        newArr.length>0 ? res.push(newArr.pop()) : res.push(-1);
    }
}
console.log("Given string: "+str);
console.log("Required pop elements array: "+res);

// ------------------------------------------------------------------
// OUTPUT
// ------------------------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-7> node .\assignment-7.6.js        
// Given string: 122214
// Required pop elements array: 2,-1

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-7> node .\assignment-7.6.js
// Given string: 12132142
// Required pop elements array: 2,3