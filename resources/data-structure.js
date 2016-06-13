
// linkedlist implementation in javascript
function Linkedlist(){
   this.root =null;
   this.length=0;
}
function Node(value){
    this.value= value;
    this.next = null;
}

Linkedlist.prototype = {
    constructor : Linkedlist,
    add : function (n){
        var node = new Node(n); 
        if(this.root == null){
            this.root =node;
        }else {
            var temp = this.root;
            while(temp.next){
                     temp = temp.next;
            }
            temp.next = node;
           
        }
         this.length++;
    },

    remove : function(value){
             if(this.root.value == value){
                    this.root= this.root.next;
                    this.length--;
             }else{
                 var current=this.root;
                 var previous;
                 while(current.value != value){
                        previous=current;
                        current = current.next;
                        var temp=current;
                        console.log(current);
                        count++;
                 }
                 previous.next=current.next
                // current = current.next;
                
                // delete node.value;
                 this.length--;
             }
    },

    find : function (value){
        if(this.root == value){
                return true;
        }else {
            var node = this.root;
            var count=0;
           
            while(node.value !== value){
                    node = node.next;
                    console.log('node',node);
                    console.log(++count,node);
            }
            if(this.length >count){

            }
            return node;
            
        }
    }
}

var ls= new Linkedlist();
ls.add(8);
ls.add(9);
ls.add(91);
ls.add(99);
ls.add(910);
ls.add(1000);



console.log(ls.find(910));