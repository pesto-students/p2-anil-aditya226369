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
    check(){
        let res = false;
        function check(node,min = -Infinity,max = Infinity){
            if(!node) return res = true;
            if(node.data <= min || node.data >= max) return res = false;
            return res = check(node.left,min,node.data) && check(node.right,node.data,max);
        }
        return res;
    }
}

let tree = new BinaryTree();
tree.addNode(3);
tree.addNode(9);
tree.addNode(20);
tree.addNode(15);
tree.addNode(7);
console.log(tree);
console.log("IS a tree?: "+tree.check());


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
// IS a tree?: false