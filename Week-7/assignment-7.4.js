// const str = "{([])}";
// const str = "()";
const str = "([]";
const arr = str.split("");
console.log("Given string: "+str);

function stackCheck(arr){
    const stack = [];
    for(let i of arr){
        let head = stack[stack.length-1];
        if(i==='{' || i==='[' || i==='('){
            stack.push(i);
        }else{
            if((head==='(' && i===')') || (head==='[' && i===']') || (head==='{' && i==='}')){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    if(stack.length!=0) return false;
    return true;
}

console.log(stackCheck(arr));

// ---------------------------------------------------------------------
// OUTPUT
// ---------------------------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-7> node .\assignment-7.4.js
// Given string: {([])}
// true
// PS F:\pesto-submissions\p2-anil-aditya226369\Week-7> node .\assignment-7.4.js
// Given string: ()
// true
// PS F:\pesto-submissions\p2-anil-aditya226369\Week-7> node .\assignment-7.4.js
// Given string: ([]
// false