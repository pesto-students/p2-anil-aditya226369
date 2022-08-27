function givenDiff(arr,diff){
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }
        if(diff==0 && map.get(arr[i])>1){
            return 1;
        }
        if(diff==0){
            return 0;
        }
        else{
            map.set(arr[i],1);
        }
    }

    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i]+diff)){
            return 1;
        }
    }
    return 0;
}

const arr = [5, 10, 3, 2, 50, 80];
const diff1=78;
const arr2 = [-10, 20];
const diff2 = 30;

console.log(givenDiff(arr,diff1));
console.log(givenDiff(arr2,diff2));

// -------------------------------------------------------------------------
// OUTPUT
// -------------------------------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-6> node .\assignment-6.5.js
// 1
// 1