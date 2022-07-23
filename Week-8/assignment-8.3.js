class Node{
    constructor(value){
        this.left = null;
        this.value = value;
        this.right  = null;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }
    addNode(value){
        let node = new Node(value);
        let curr = this.root;
        if(this.root === null) return this.root = node;
        while(true){
            if(value === curr.value) return undefined;
            if(value < curr.value){
                if(curr.left === null) return curr.left = node;
                curr = curr.left;
            }else{
                if(curr.right === null) return curr.right = node;
                curr = curr.right;
            }
        }
        return this;
    }
    level_order(){
        let queue = [this.root];
        let ans = [];
        while(queue[0]){
            let arr = [];
            for(let i=0;i<queue.length;i++){
                let curr = queue.shift();
                arr.push(curr.value);
                if(curr.left) queue.push(curr.left);
                if(curr.right) queue.push(curr.right);
            }
            ans.push(arr);
        }
        console.log(ans);
    }
}

let tree = new BinaryTree();
tree.addNode(3);
tree.addNode(9);
tree.addNode(20);
tree.addNode(15);
tree.addNode(7);
console.log(tree);
console.log("level order array: ");
tree.level_order();


// ------------------------------------------
// OUTPUT
// ------------------------------------------
// PS F:\pesto-submissions\p2-anil-aditya226369\Week-8> node .\assignment-8.1.js
// BinaryTree {
//     root: Node
//     left: null
//     right: Node
//     left: Node {left: null, value: 7, right: null}
//     right: Node
//     left: Node {left: null, value: 15, right: null}
//     right: null
//     value: 20
//     [[Prototype]]: Object
//     value: 9
//     [[Prototype]]: Object
//     value: 3
//     [[Prototype]]: Object
//     [[Prototype]]: Object
// level order array: 
// [ [ 3 ], [ 9, 7 ], [ 20 ], [ 15 ] ]