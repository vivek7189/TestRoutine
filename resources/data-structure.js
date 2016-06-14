'use strict';
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
    }
}

var ls= new Linkedlist();
ls.add(8);
ls.add(9);
ls.add(91);
ls.add(41);




console.log(ls);





// callback functions in javascripts

function makeIt(name,last,callback){
   console.log("name",name);
   callback(name,last);
}

function callbackFn(last,namec){
  console.log("fgffhgfhfh",last,namec);
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