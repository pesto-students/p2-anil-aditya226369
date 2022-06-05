// Fabonacci series using javascript iterables

var fabonacci = {
    [Symbol.iterator](){
        let beforeBefore = 1;
        let before = 0;
        let sum = 0;
        return {
            next() {

                // here the previous variable is assign to next variable
                [sum,before,beforeBefore] = [before,beforeBefore,before+beforeBefore];
                return {
                    // here we are returning the value as sum
                    value:sum,
                }
            }
        }
    }
}

// used to traverse the fabonacci elements
for(const i of fabonacci){
    if(i>10) break;
    console.log(i);
}

// -----------------------------------------------------------------------
// output
// -----------------------------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-4> node .\assignment-4.3.js
// 0
// 1
// 1
// 2
// 3
// 5
// 8