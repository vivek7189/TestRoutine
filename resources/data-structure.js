
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
           
            while(node && node.value !== value){
                    node = node.next;
                    console.log('node',node);
                    console.log(++count,node);
                   if(this.length === count){
                        console.log("not found");
                        break;
                    }
            }
            
            return node;
            
        }
    },
    reverse : function(){
        var root =this.root,
            current,prev,next;
                current=this.root;
                while(current !== null){
                    next = current.next;
                    current.next = prev;
                    prev = current;
                    current = next;
                }
                root=prev;
                console.log("prev prev : ",root);

    }
}

var ls= new Linkedlist();
ls.add(8);
ls.add(9);
ls.add(91);
ls.add(41);


ls.reverse();

console.log(ls);





// callback functions in javascripts

function makeIt(name,last,callback){
   console.log("name",name);
   var fnname="nameit"
   callback(name,last,fnname);
}

function callbackFn(last,namec,fnname){
  console.log("fgffhgfhfh fnname",last,namec,fnname);
}


function parents(){

    var namec="vivek342";
    var tt = function (){
        console.log('namec',namec);
        makeIt("viv",namec,callbackFn);
   }
   return tt;
}

var ff= parents();
console.log(ff());




// 
var calObj={a:4,b:6}
var cal ={
    text:"vivek",
    add : function (a,b){
    return this.a+this.b;
    },
    sub : function (a,b){
        return a-b;
    },
    format : function (){
            var th = this
        return function upper(){
                       // use this variable in outer function to get a refrence of this inside inner fn
                    var txt = th.text.toUpperCase();
                    return txt +"text";
        }
        //upper(th.text);
    }
}
console.log(cal.format("ram")());
console.log(cal.add.call(calObj,4,8));







// implement a 


var ls2= new Linkedlist();
ls2.add(25);
ls2.add(26);
ls2.add(27);
ls2.add(28);
ls2.add(29);
ls2.add(30);

//ls2.root.next.next.next.next.next.next = ls2.root;

console.log("dfd : ",ls2);

// function to detect a loop in side linked list

function detectLoop(ls2){
   var point1=ls2.root,point2=ls2.root;

   while(point1 && point2 && point2.next){
            point1 = point1.next;
            point2 =point2.next.next;
           if(point1 == point2){
                  return true;
           }
   }
   return false;
}


console.log(detectLoop(ls2));



// implement merge sort for arrays
var mergeArr=[4,5,7,8,9,6,5,8];
function divide(arr){
   for(var i=0;i<arr.length;i++){
        merge(arr[i],arr[i+1]);
   }
}

function merge(ar1,ar2){
   // console.log(arr1,ar2);
   
                
}
divide(mergeArr);













var Mergesort = (function() {

  /**
   * Sorts the array by breaking it down
   * into smaller chunks.
   *
   * @param {Array} array The array to sort
   */
  function sort(array) {

    var length = array.length,
        mid    = Math.floor(length * 0.5),
        left   = array.slice(0, mid),
        right  = array.slice(mid, length);

    if(length === 1) {
      return array;
    }

    return merge(sort(left), sort(right));

  }

  /**
   * Merges two sublists back together.
   * Shift either left or right onto
   * the result depending on which is
   * lower (assuming both exist), and simply
   * pushes on a list if the other doesn't
   * exist.
   *
   * @param {Array} left The left hand sublist
   * @param {Array} right The right hand sublist
   */
  function merge(left, right) {

    var result = [];

    while(left.length || right.length) {

      if(left.length && right.length) {

        if(left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }

      } else if (left.length) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }

    }

    return result;

  }

  return {
    sort: sort
  };

})();

console.log(Mergesort.sort(mergeArr))


// make a binary saerch tree from an sorted array

var binaryArr=[1,4,5,6,7,8,9];

var binaryTree=function(){
             function Node(data){
                    this.data=data;
                    this.left=null;
                    this.right=null;
             }
             function arrayTobst(arr,start,end){
                 if(start > end ){
                     return null;
                 }
                 var mid =Math.floor((start + end)/2);
                 var node = new Node(arr[mid]);

                 node.left = arrayTobst(arr,start,mid-1);
                 node.right =arrayTobst(arr,mid+1,end);

                 return node;
             }   
             function findNode(node,key){
                 if(node === null){
                        return false;
                 }
                 if(node.data === key){
                        return true;
                 }
                 if(node.data > key){
                     var node= node.left
                     findNode(node,key);
                 }
                 if(node.data < key){
                     var node= node.right
                     findNode(node,key);
                 }
             }
             function inorder(node){
                 
                   if(node === null){
                       return;
                   }
                   inorder(node.left);
                   console.log(node.data);
                   inorder(node.right);
             }
             function preorder(node){
                 if(node === null){
                       return;
                   }
                   console.log(node.data);
                   inorder(node.left);
                   inorder(node.right);
             }
             function postorder(node){
                 if(node === null){
                       return;
                   }
                   postorder(node.left);
                   postorder(node.right);
                   console.log(node.data);
             }
             function mirror(node){
                 if(node === null){
                     return false;
                 }else{
                     var root =node;
                     var nodeleft = node.left;
                     var noderight =node.right;

                     root.left=noderight;
                     root.right=nodeleft;
                        mirror(root.left);
                        mirror(root.right);
                            console.log(root);
                 }
             }
             return{
                 Node:Node,
                 arrayTobst:arrayTobst,
                 findNode:findNode,
                 inorder:inorder,
                 preorder:preorder,
                 postorder:postorder,
                 mirror:mirror
             }
};
var btTree =new binaryTree();
var root = btTree.arrayTobst(binaryArr,0,binaryArr.length);
 console.log('binaryTree',btTree,root);

console.log('binaryTree inorder',btTree.inorder(root));


console.log('binaryTree findNode',btTree.findNode(root,7));

btTree.mirror(root);







// 

function optimalCoin(n){

            if(n <2){
                    return n;
            }
            else {
                var count1 =  Math.floor(n/2)
                var count2=Math.floor(n/3)
                var count3 =Math.floor(n/4)
                var count4=Math.floor(n/5);

                console.log("count :",count);
            }
}

 optimalCoin(18);



// function to implement a queue

function Queue(){
    this.head=null;
    this.data=[];
}

Queue.prototype ={
    constructor:constructor,
    enque : function (value){
        if(value != null){
             this.data.push(value);   
        }
    },
    dequeue : function (){
            return this.data.shift();
    }
}







// implement graphs Breadth first search


var bfs = function (){
    var adjancyArray=[];

    var Graph = function (v){
            this.length=v;
            this.adjancyList =new Array(v);
            for(var i=0;i<v;i++){
                this.adjancyList[i]= new Linkedlist();     
            }

    }

    var addEdge = function(a,b){
            this.adjancyList[a].add(b);
    }

    var BFSTraverse = function (start){
            var s= start;
            var arr=[];
            var queue = new Queue();
            var adjList=this.adjancyList;
            queue.enque(s);
            arr.push(s);
            var adj =adjList[s].root
            while(queue.data.length){
                s = queue.dequeue();    
                console.log("traverse the graph :",s);
                while(adj.next !== null){
                    if(arr.indexOf(adj.value) == -1 ){
                        queue.enque(adj.value);
                        arr.push(adj.value);
                        adj =adj.next;
                    }
                }
                if(adj.next == null){
                     if(arr.indexOf(adj.value) == -1){
                        arr.push(adj.value);
                        queue.enque(adj.value);
                     }
                }

            }
            console.log("bsf push array :",arr,queue);
    }


    return{
    Graph:Graph,
    addEdge:addEdge,
    BFSTraverse:BFSTraverse
    }
}

var bfs = new bfs();
bfs.Graph(5);

bfs.addEdge(0,1);
bfs.addEdge(0,2);
bfs.addEdge(1,2);
bfs.addEdge(2,0);
bfs.addEdge(2,3);
bfs.addEdge(3,3);
bfs.addEdge(1,4);
bfs.addEdge(0,4);

bfs.BFSTraverse(0);
console.log("bfs",bfs);




// chekc for balanced paranthesis of some expressions
var exp= '((a()))';
function validateExp(exp){
        console.log('exp',exp);
        if(exp == ''){
           return true;
        }else{
            var temp=exp.split('');
            var arr=[];
            var start =['(','{','['];
            var end =[')','}',']'];
            var mapkey ={
                    "(" :")",
                    "[" : "]",
                    "{" : "}"
            };
            for(var i=0;i<temp.length;i++){
                var value=temp[i];
                    if(start.indexOf(value) >= 0){
                        arr.push(value);
                    }else if(end.indexOf(value) >=0){
                        var key =arr.pop(value)
                            if(value !== mapkey[key]){
                                return false;
                            }

                    }
            }
            if(arr.length === 0){
                return true;
            }else{
                return false
            }
            
        }
}

console.log("validateExp .. :",validateExp(exp));



zigzag(3,"abcdefghijklmnopqrstuvwyz");
function zigzag(count,string){
   var str= string;

        for(var i=0;i<str.length;i++){
                if(i==3){
                    var space="&nbsp;"
                    console.log(str[i]);
                }
                if(i==4){
                    var space="&nbsp;"
                    console.log(space+str[i]);
                }  
        }
}


reverseArray([10,7,4,5,6,3,44]);
function reverseArray(arr){
        var tt=[];
        var j=arr.length;
        for(var i=0;i<arr.length/2;i++){
                  var temp=arr[j-i];
                  arr[j-i] =arr[i];   
                  arr[i]=temp;
        }
        console.log("reverse arr is : ",arr);
}


// permutation of string
recPerm("abcd", '');

function recPerm(rest, soFar) {
    var next;
    var remaining;

    if (rest == '') {
        console.log(soFar);
    } else {

        for (var i = 0; i < rest.length; i++) {
            remaining = rest.substr(0,i) + rest.substr(i+1,rest.length-1);
            next = soFar + rest[i];
            recPerm(remaining, next);
        }

    }   

}

var  person= {
          name:'viv',
          dept :"IT"
      }

var obj = function(){
	 _bar = 10;
     
	function i_bar(str){
        var tt =str;
        str.name='ui';
        tt.namew="gi";
        str={gh:"tm"}
        console.log(person,tt,str);
        return ++_bar + person;
    }
 
	return {
    	bar  : _bar,
    	i_bar: i_bar
	}
};


console.log(obj().i_bar(person));
console.log(person);

// dynamic array in javascript concept
arraytest([1,4,5,6,7,7]);
function arraytest(arr){
    var len=arr.length;
    // below arr.length and pushing element to array create an infinite loop
    for(var i=0;i<arr.length;i++){
        //arr.push(i);
    }
    console.log(arr);
}


// own custome event handler functions;


var elem = document.getElementById("main");

$("#table").on("click",'.title', function(){
    console.log(this);
})

function isInViewport(elem){
var cord = elem.getBoundingClientRect();
console.log("bounding element : ",cord);
console.log("window.innerHeight : ",window.innerHeight);
}
var elementImage = document.querySelector(".image23");
isInViewport(elementImage);

window.onscroll=function(){
isInViewport(elementImage);
}


// memeory leak examples

function memoryLeak(){
   var element = document.createElement("audio");
   element.string= new Array(10).join(new Array(20).join("XXXXX"));
   document.body.appendChild(element);
   console.log("element ,",element);
   element.parentNode.removeChild(element);
   
    element = null;
   console.log("element ,",element.string);
}
//setInterval(memoryLeak,1000);

// delete an object parent property

function deleteObj(){
    var obj= {
        name:'temp',
        last:'same',
        address: {city:'MZN',pin:'42551'}
    }
    Object.defineProperties(obj, {
            'name':{
            value:'vive',
            writable:true,
            configurable:false
	        }   
        }
    );
//obj =null;
delete obj.name;
    console.log("obj.address",obj);
}
deleteObj();

function Remove(str, startIndex, count) {
    return str.substr(0, startIndex) + str.substr(startIndex + count);
}

function peopleService(string){
   var str=string;
   for(var i=0;i<str.length;i++){
         var mainChar =str[i];
         var restStrring =Remove(str,i,1);
         
         console.log('mainChar : ',mainChar);
         console.log('restStrring : ',restStrring);
            makePermute(restStrring,mainChar);
        
   }
}

function  makePermute(str,char){
    var len =str.length+1;
        for(var j=0;j<=len;j++){
                var output = str.substr(0, j) + char + str.substr(j);

                console.log("output : ",output);
        }
}
peopleService("abc");


function printCounter(){

    for(var i=0;i<5;i++){
         // console.log(i);

          setTimeout(function (i){
           console.log("counter2 ",i);   
          }.bind(this,i),2000);
    }
}
function tt(i){
              console.log("printCounter :",i)
          }
printCounter();
// 1vh  1% of viewport height


//substr takes length as funtion arguments
//slice take stsrt and end of function arguments
//substring take 

// TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log("ba34r 6");
};
notHoisted(); 

var notHoisted = function() {
   console.log("ba34r 6 900");
};
notHoisted(); 

 function notHoisted1() {
   console.log("123");
};
notHoisted1();
function notHoisted1() {
   console.log("12345635");
};
notHoisted1();


