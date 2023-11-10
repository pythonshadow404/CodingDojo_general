class Node{
    constructor(value){//constructor is used to initilize the node value
        this.value = value;
        this.next = null;
    } 
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0  // keeps track of the number of node in the list
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
}

// create a new instance of the new link list class
const list = new LinkedList()
console.log('List is empty? ', list.isEmpty());
console.log('List size ', list.getSize());