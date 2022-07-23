function sort(arr){
    let first = 0;
    let middle = 0;
    let last = arr.length-1;
    let temp;
    while(middle<=last){
        if(arr[middle]==0){
            temp = arr[first];
            arr[first] = arr[middle];
            arr[middle] = temp;
            first++;
            middle++;
        }
        else if(arr[middle]==1){
            middle++;
        }
        else{
            temp = arr[middle];
            arr[middle] = arr[last];
            arr[last] = temp;
            last--;
        }
    }
    return arr;
}

const arr = [0,2,1,2,0];
const arr2 = [0,1,0];
console.log(sort(arr));
console.log(sort(arr2));

// ------------------------------------------------------------------
// OUTPUT
// ------------------------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-6> node .\assignment-6.3.js
// [ 0, 0, 1, 2, 2 ]
// [ 0, 0, 1 ]
