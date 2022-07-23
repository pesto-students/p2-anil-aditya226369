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

linkedList.prototype.rotate = function(k){
    let firstLoop = this.head;
    let mainStart = null;
    let prev = null;
    let i=0;
    while(i<k){
        if(this.head==null){
            this.head = firstLoop;
        }
        prev = this.head;
        this.head = this.head.next;
        i++;
    }
    prev.next = null;
    mainStart = this.head;
    while(this.head.next!=null){
        this.head = this.head.next;
    }
    this.head.next = firstLoop;
    this.head = mainStart;
}

const list = new linkedList();
// list.addInList(2);
// list.addInList(4);
// list.addInList(7);
// list.addInList(8);
// list.addInList(9);
list.addInList(1);
list.addInList(2);
list.addInList(3);
list.addInList(4);
list.addInList(5);
list.addInList(6);
list.addInList(7);
list.addInList(8);

console.log("Given linkedList: "+list.printList());
// list.rotate(3);
list.rotate(4);

console.log("Answer list: "+list.printList());


// -----------------------------------------------------------------------
// OUTPUT
// -----------------------------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-7> node .\assignment-7.2.js
// Given linkedList: 2->4->7->8->9
// Answer list: 8->9->2->4->7

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-7> node .\assignment-7.2.js
// Given linkedList: 1->2->3->4->5->6->7->8
// Answer list: 5->6->7->8->1->2->3->4