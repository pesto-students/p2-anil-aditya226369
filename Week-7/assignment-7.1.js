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

linkedList.prototype.reverse = function(){
    let prev = null;
    let curr = this.head;
    let next;
    while(curr!=null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    this.head = prev;
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
list.addInList(10);


console.log("Given linkedList: "+list.printList());
list.reverse();
console.log("Answer list: "+list.printList());

// ---------------------------------------------------------------------
// OUTPUT
// ---------------------------------------------------------------------
// PS F:\pesto-submissions\p2-anil-aditya226369\Week-7> node .\assignment-7.1.js
// Given linkedList: 1->2->3->4->5->6
// Answer list: 6->5->4->3->2->1

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-7> node .\assignment-7.1.js
// Given linkedList: 2->7->8->9->10
// Answer list: 10->9->8->7->2