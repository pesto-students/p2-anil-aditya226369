// const given = [1,3,2,4];
const given = [6,8,0,1,3];
let arr = given;
let res=[]
if(arr.length>0){
    res.push(-1);
}
let max = arr[arr.length-1];

for(let i=arr.length-2;i>=0;i--){
    if(arr[i]<arr[i+1]){
        res.push(arr[i+1]);
    }else if(arr[i]<max){
        res.push(max);
    }else{
        res.push(-1);
    }
}

function reverse(arr){
    let result=[];
    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i]);
    }
    return result;
}
console.log("Given array: "+given);
console.log("Answer array: "+reverse(arr));

// -------------------------------------------------------------------
// OUTPUT
// -------------------------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-7> node .\assignment-7.5.js
// Given array: 1,3,2,4
// Answer array: 4,2,3,1

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-7> node .\assignment-7.5.js
// Given array: 6,8,0,1,3
// Answer array: 3,1,0,8,6