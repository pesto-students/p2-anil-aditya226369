// Find the contiguous subarray within an array, A of length N which has the largest sum.

// we can find that by bruteforce method also whose complexity will be O(N2) while if we use a Kaden's alogrith te complexity will be O(n)

function maxSum(arr){
    let maxSum = 0;             //used to get maximum subarray sum
    let currentSum = 0;         //used to get current subarray sum

    for(let i=0;i<arr.length;i++){
        currentSum += arr[i];
        if(currentSum > maxSum){
            maxSum = currentSum;
        }
        if(currentSum < 0){
            currentSum = 0;
        }
    }

    return "maxSum of given array is :"+maxSum;
}

console.log(maxSum([1, 2, 3, 4, -10]));
console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSum([4,-1,2,1]));




// ----------------------------------------------------------
// OUTPUT
// ----------------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-6> cd .\Assignment-6.1\
// PS F:\pesto-submissions\p2-anil-aditya226369\Week-6\Assignment-6.1> node .\assignment-6.1.js
// maxSum of given array is :10
// maxSum of given array is :6
// maxSum of given array is :6
