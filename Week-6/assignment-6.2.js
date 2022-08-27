function spiral(arr){
    let top = 0;
    let right = arr[0].length - 1;
    let bottom = arr.length -1;
    let left = 0;
    let dir =1;
    let res =[];

    while(top<=bottom && left<=right){
        if(dir==1){
            for(let i=left;i<=right;i++){
                res.push(arr[top][i]);
            }
            top++;
            dir=2;
        }
        else if(dir==2){
            for(let i=top;i<=bottom;i++){
                res.push(arr[i][right]);
            }
            right--;
            dir=3;
        }
        else if(dir==3){
            for(let i=right;i>=left;i--){
                res.push(arr[bottom][i]);
            }
            bottom--;
            dir=4;
        }
        else if(dir==4){
            for(let i=bottom;i>=top;i--){
                res.push(arr[i][left]);
            }
            left++;
            dir=1;
        }
    }
    return res;
}


const arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
console.log("Given array: ");
console.log(arr);
console.log("Spiral array : ");
console.log(spiral([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]));


// --------------------------------------------------------
// OUTPUT
// --------------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-6> node .\assignment-6.2.js
// Given array: 
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// Spiral array : 
// [
//   1, 2, 3, 6, 9,
//   8, 7, 4, 5
// ]