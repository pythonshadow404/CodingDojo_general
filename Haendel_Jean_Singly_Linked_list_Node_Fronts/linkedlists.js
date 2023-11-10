class SLLNode { // Singly-linked list  node class
    constructor(val){
        this.value = val; // Holds value for this node
        this.next = null; // Pointer to next node
    }
}

class SLL { // The Singly-linked list class itself
    constructor(){ // Will start with no nodes
        this.head = null; // Head points to first node
    }
    // All methods built into your class go here
    addFront(value){
        var newNode = new SLLNode(value); //define a new instance of the SLL class node
        newNode.next = this.head;
        this.head = newNode;
        return this.head; // OR you can say return this;
    }

    // Remove a node from the front of the list
    removeFront(){
        if (this.head == null){
            return this.head;
        }
        var tempNode = this.head; // Have a variable hold the node we'll remove
        this.head = tempNode.next; // Moves the head of the list to the 2nd node, which will become the new head when we're done
        tempNode.next = null;
        return this.head;
    }

    // Return the value at the front (head) of the list
    front(){
        //Edge Case: list is empty
        // if (this.head ==null){
        //     return null;
        // } else { // list is not empty
        //     return this.head.value;
        // }
        // Ternary operator is basically a one line if statement: 
        // condition ? value_if_true : value_if_false
        return this.head == null ? null : this.head.value; //(if this.head is empty then return null otherwise return value)
        //or return this.head ? this.head.value : null;  
        //(if this.head is not null is truthy statement then null where null is a falsely statement)
    }
}

var mySLL = new SLL(); // Starts us off with an empty list
console.log(mySLL.front());
mySLL.addFront(10);
mySLL.addFront(5);
mySLL.addFront(3)
console.log(mySLL.front());
// mySLL.removeFront();


// console.log(mySLL);