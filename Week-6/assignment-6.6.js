function tsum(arr,target){
    arr.sort((a,b)=>a-b);
    console.log("Sorted array :"+arr);
    let min = Infinity,l,r;
    for(let i=0;i<arr.length-2;i++){
        if(i>0 && arr[i]===arr[i-1]) continue;
        l = i+1;
        r = arr.length-1;
        while(l<r){
            const sum = arr[i]+arr[l]+arr[r];
            min = Math.abs(target-min) > Math.abs(target-sum) ? sum : min;
            if(sum>target) r--;
            else if(sum<target) l++;
            else return "min distance number :"+target;
        }
    }
    return "min distance number :"+min;
}

const arr = [-1,2,1,-4];
const target = 1;
console.log(tsum(arr,target));

// ---------------------------------------------------------------------------
// OUTPUT
// ---------------------------------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-6> node .\assignment-6.6.js
// Sorted array :-4,-1,1,2
// min distance number :2