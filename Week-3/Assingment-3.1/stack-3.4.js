function createStack(){
    const items=[];
    function push(item){
            items.push(item);
    }
    function pop(){
            return items.pop();
    }
}

const stack = createStack();
stack.push(10);
stack.push(11);
console.log(stack.pop());
// stack.items=[12,13];
console.log(stack.items);