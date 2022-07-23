
function maxProfit(arr){
    let l=0,r=1,maxProfit = 0;
    while(r < arr.length){
        if(arr[l]<arr[r]){
            maxProfit = Math.max(maxProfit,arr[r]-arr[l]);
        }else{
            l=r;
        }
        r++;
    }
    return maxProfit;
}

const arr = [7,1,5,3,6,4];
const arr2 = [7,6,4,3,1];

console.log(maxProfit(arr));
console.log(maxProfit(arr2));

// -----------------------------------------------------------------
// OUTPUT
// -----------------------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-6> node .\assignment-6.4.js
// 5
// 0
