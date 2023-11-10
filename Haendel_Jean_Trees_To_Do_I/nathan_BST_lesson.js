class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    add(value){
        var new_node = new Node(value);
        if(this.root == null){
            this.root = new_node; //if this.root is null replace it with new node
            return this;
        }else{
            var pointer = this.root;
            while(pointer){
                var temp = pointer;
                if (value < pointer.value){
                    pointer = pointer.left;
                    if(pointer == null){
                        temp.left = new_node;
                        return this;
                    }
                }else{
                    pointer = pointer.right;
                    if(pointer == null){
                        temp.right = new_node;
                        return this;
                    }
                }
            }
        }
    }
}

var bst1 = new BST(); //new instance of binary search tree
bst1.add(25)
bst1.add(12)
bst1.add(30)
bst1.add(10)
bst1.add(13).add(35).add(26)
console.log(bst1)
