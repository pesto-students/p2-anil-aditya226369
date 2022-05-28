function createStack(){
    const items=[];
    return {
        push(item){
            items.push(item);
        },
        pop(){
            return items.pop();
        }
    };
}

const stack = createStack();
stack.push(10);
stack.push(11);
stack.pop();
// stack.items.push(13);
console.log(stack.items);

// Output:
// Here line 17 generate error as we can't access items outside the function
// If we comment then also we get : "undefined"
// as we can't access items outside function


// --------------------------------------------------------------------
// Explanation:
// --------------------------------------------------------------------
// The output of above code : "undefined"
// beacuse we declare items array inside the function scope
// but in the below code items is declared at the time of return



// function createStack(){
//     return {
//         items:[],
//         push(item){
//             this.items.push(item);
//         },
//         pop(){
//             return this.items.pop();
//         }
//     };
// }
// const stack = createStack();
// stack.push(10);
// stack.push(11);
// stack.pop();
// stack.items.push(13)
// console.log(stack.items);

// Ouput:
// [10,13]