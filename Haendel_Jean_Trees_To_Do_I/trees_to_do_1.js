class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{ 
    constructor(){
        this.root = null;
    }
    // BST: ADD a root
    add(value){
        var new_node = new Node(value);
        if(this.root == null){
            this.root = new_node;
            return this;
        }else{
            var runner = this.root;
            while(runner){
                if(value > runner.value){
                    if (runner.right){
                        runner = runner.right;
                    } else{
                        runner.right = new_node;
                        return this;
                    }
                } else{
                    if(runner.left){
                        runner = runner.left;
                    } else{
                        runner.left = new_node;
                        return this;
                    }
                }
            }
        }
    }

    // find the value the nodes contain
    contains(root, value){
        if(!root){
            return false;
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.contains(root.left, value);
            }else{
                return this.contains(root.right, value)
            }
        }
    }

    // find the min value
    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left);
        }
    }

    // find the max value
    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right);
        }
    }
}

var bst2 = new BST()
bst2.add(5)
bst2.add(3)
bst2.add(7).add(2).add(8).add(4).add(6).add(8)
// console.log(bst2)
// console.log(bst2.contains(bst2.root,0))
// console.log(bst2.contains(bst2.root,4))
// console.log(bst2.contains(bst2.root,9))
console.log(bst2.min(bst2.root))
console.log(bst2.max(bst2.root))
