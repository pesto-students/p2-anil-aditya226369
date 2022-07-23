class Node{
    constructor(data,next){
        this.data = data;
        this.next = null;
    }
}

class linkedList{
    constructor() {
        this.head = null;
    }
}


linkedList.prototype.addInList = function(data){
    let new_node = new Node(data);
    let start = this.head;
    if(this.head==null){
        this.head = new_node;
        return;
    }
    while(start.next!=null){
        start = start.next;
    }
    start.next = new_node;
    return this.head;
}

linkedList.prototype.printList = function(){
    let curr = this.head;
    let res=[];
    while(curr!=null){
        res.push(curr.data);
        curr = curr.next;
    }
    return res.join("->");
}

linkedList.prototype.loopCheck = function(){
    let slow = this.head; 
    let fast = this.head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow ===fast){
            return true;
        }
    }
    return false;
}

const list = new linkedList();
// list.addInList(1);
// list.addInList(2);
// list.addInList(3);
// list.addInList(4);
// list.addInList(5);
// list.addInList(6);

list.addInList(2);
list.addInList(7);
list.addInList(8);
list.addInList(9);
// console.log(this.head.data)


console.log("Given linkedList: "+list.printList());
console.log("Answer: "+list.loopCheck());


// ---------------------------------------------------------------
// OUTPUT
// --------------------------------------------------------------
// PS F:\pesto-submissions\p2-anil-aditya226369\Week-7> node .\assignment-7.3.js
// Given linkedList: 2->7->8->9
// Answer: false