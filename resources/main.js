/**
 * Created by vivek.kumar1 on 6/1/16.
 */
console.log(1);

var arr = [-3, -2, 0, 3, 4, 5, 51, -9, 9]

function distinctCount(arr) {
    var count = 0;
    var store = {};
    for (var i = 0; i < arr.length; i++) {
        console.log(store[arr[i]]);
        if (arr[i] == store[arr[i]]) {

        } else {
            store[Math.abs(arr[i])] = Math.abs(arr[i]);
        }
    }
    count = console.log(Object.keys(store).length);
    return count;
    ;
}

console.log(distinctCount(arr));

// find lost element from the array

var arr1 = [4, 5, 6, 9, 10, 11, 12];
var arr2 = [4, 5, 9, 10, 11, 12];

function binarySearch(arr, left, right, elem) {

    var mid = Math.floor(left + right / 2);
    if (arr[mid] == elem) {
        console.log("element found");
        return elem;
    }
    else if (elem > arr[mid]) {
        binarySearch(arr1, mid, arr1.length, 11);
    } else if (elem < arr[mid]) {
        binarySearch(arr1, 0, mid - 1, 11);
    }
}

binarySearch(arr1, 0, arr1.length, 1);

var mod = angular.module('App', []);
mod.controller('mainController', ['$scope', function ($scope) {
    $scope.name = "Main Application";
}]);


var dataSet = [
    {
        "Grade": "Math K",
        "Domain": '{"viv":2}'
    },
    {
        "Grade": "Math K",
        "Domain": "Geometry"
    },
    {
        "Grade": "Math 1",
        "Domain": "Counting & Cardinality"
    },
    {
        "Grade": "Math 1",
        "Domain": "Orders of Operation"
    },
    {
        "Grade": "Math 2",
        "Domain": "Geometry"
    }
];
var tt = dataSet[0].Domain;
//console.log('json',JSON.parse(tt).viv);
function filterData(data) {
    console.log(data);
    var temp = {};
    for (var i = 0; i < data.length; i++) {
        if (temp[data[i].Grade] == undefined) {
            console.log(1);
        }
        if (data[i].Grade == temp[data[i].Grade]) {
            data.splice(i, 1);
            console.log(2);
        }
        else {
            console.log(3);
            temp[data[i].Grade] = data[i].Grade;
        }

    }
    //console.log(data);
}

//filterData(dataSet);

var standardsList = [
    { "Grade": "Math K", "Domain": "Counting & Cardinality" },
    { "Grade": "Math K", "Domain": "Geometry" },
    { "Grade": "Math 1", "Domain": "Counting & Cardinality" },
    { "Grade": "Math 1", "Domain": "Orders of Operation" },
    { "Grade": "Math 2", "Domain": "Geometry" }
];

function filterdata(data, key) {
    var temp = {};
    for (var i = 0; i < data.length; i++) {
        // var tt= JSON.parse(key);

        // use . notation  for fixed value and use [] notation for variable key value

        // console.log(data[i][key]); // will show the result based on the value of key variable
        //console.log(data[i].key); // will throw error
        // console.log(data[i].Grade); // will give the value based on the value of key Grade


        if (temp[data[i][key]] === data[i][key]) {
            data.splice(i, 1);
        }
        if (undefined !== data[i]) {
            temp[data[i][key]] = data[i][key];
        }
    }
    //console.log(temp,data)
}
var key = "Domain";
filterdata(standardsList, key);















var gradedata = [
    { "Grade": 2, "Domain": "Counting & Cardinality" },
    { "Grade": 3, "Domain": "Geometry" },
    { "Grade": 1, "Domain": "Counting & Cardinality" },
    { "Grade": 4, "Domain": "Orders of Operation" },
    { "Grade": 7, "Domain": "Geometry" },
    { "Grade": 17, "Domain": "Geometry" },
    { "Grade": 70, "Domain": "Geometry" }
];

//console.log(gradedata.filter(getResult));

function getResult(value, index, item) {
    console.log(value, index, item[index].Grade);
    if (item[index].Grade > 4) {
        return true;
    } else {
        return false;
    }
}

function mapResult(value, index, item) {
    if (item[index].Grade > 4) {
        return true;
    } else {
        return false;
    }
}
//console.log(gradedata.map(mapResult));

// custom method for mapping method
Array.prototype.mapping = function (fn) {
    var th = this;
    var newArray = new Array(th.length);

    for (var i = 0; i < th.length; i++) {
        var data = fn.call(th, th[i]);
        newArray.push(data);
    }
    return newArray;

}
function Square(value) {
    return Math.sqrt(value);
}

console.log([4, 9, 81].mapping(Square));




function fibonacci(n) {
    //console.log(n);
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}
console.log(fibonacci(5));


var data = { firstname: 'Jesper', data1: "{'surname':'Aaberg','phone':'fdf'}" };
/*var tt =JSON.parse(data.data1);
console.log(tt);*/






var userController = {
    currentUser: '',
    findUser: function () {
        return this.currentUser;
    },
    setUser: function (user) {
        this.currentUser = user;
    },
    getuser: function () {
        return userController.findUser();
    }

}

userController.setUser("vivek6");

//console.log(userController.getuser());


var modulePattern = (function () {

    var count = 0;
    var name1 = "vivek"

    var getName = function () {
        console.log("name", name1);
        return name1;
    }

    var setName = function (name) {
        this.name = name;
    }

    return {

        get: getName,
        set: setName
    }
});
var md1 = modulePattern();
md1.set('kapil');
//console.log(md.get());

var modulePattern2 = (function (md) {
    var name = md();
    var count2 = 2;
    console.log(name.get());

    md.getCount = function () {
        console.log(name.get() + count2);
    }
    var getIt = function () {
        return {
            md: name
        }
    }


    return {
        tm: getIt
    }
})(modulePattern);

var md2 = modulePattern2;
//console.log(modulePattern2);







// closures in java script
var temp = 9
var add = function (a, b) {
    temp = a + b;
    return function addAll(c) {
        return temp + c
    }
}
var m1 = add(3, 5);
console.log(m1(3));

function callIt(a, b) {
    console.log("inside call function", a, b);
}

setTimeout(callIt, 5000, 'viv', '4');

setTimeout(callIt.bind(this, 'viv', 4), 3000);

// below function will be executed as soon as the js is parsed
setTimeout(callIt.call(this, 'viv', 4), 3000);

setTimeout(function () { callIt(45, 23) }, 3000);


myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"

setTimeout(myArray.myMethod.bind(myArray, 1), 400);



// you can directly add ethod or prop to array,object,and function but not on primitive type like int
var str = function () { };
str.strMethod = function () { console.log('str method') };
console.log(str.strMethod());


var array = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];

var ObjeUtil = {};

ObjeUtil.removeDuplicate = function (arr) {
    var exists = {},
        outArr = [],
        elm;
    var a = { a: 1 }, b = { b: 2 };
    a.toString = function () {
        return 'a';
    }
    for (var i = 0; i < arr.length; i++) {
        elem = arr[i];
        if (1) {
            outArr.push(elem);
            exists[new Number(arr[i])] = a + i;
            console.log(typeof (exists[i]))
        }
    }
    console.log(exists);
    return outArr;
}


console.log("Array after removing duplicates :", ObjeUtil.removeDuplicate(array));


// swap the numbers without the temp variable
var i = 55, j = 9;
function swapNumber(a, b) {
    // old approache
    //var temp = b;
   // j = a;
   // i = temp;
   // console.log(i, j);
    // new approache

 b = b -a;
  a = a+ b;
  b = a-b;
  console.log('after swap: ','a: ', a, 'b: ', b);  
}
swapNumber(i, j);

// Sum of two find inside the array
var array4 =[6,4,3,2,1,7];
function sumfinder(arr,sum){
    for(var i=0; i < arr.length; i++){
       for(var j=i+1;j<arr.length;j++){
          
               if(arr[i]+arr[j] == sum){
                   return true
               }
           
       }
    }
   return false
}
//console.log(sumfinder(array4,8));

// second approache to find the sum inside array
function findSumArray(arr,sum){
   var differ={},
        len= arr.length,
        substract;

     for(var i=0;i<len;i++){
        substract =sum - arr[i];
        if(differ[substract]){
            return true;
        }else{
            differ[arr[i]] =true;
        }
     } 
     return false;  
}
console.log(findSumArray(array4,9))



function isElementVisible(H, G) {
    var I = H.getBoundingClientRect()
        , D = window.innerWidth || document.documentElement.clientWidth
        , F = window.innerHeight || document.documentElement.clientHeight
        , E = function (J, K) {
            return document.elementFromPoint(J, K)
        }
        ;
    if (I.right < 0 || I.bottom < 0 || I.left > D || I.top > F) {
        return false
    }
    if (!G && I.left >= 0 && I.top >= 0 && I.right <= D && I.bottom <= F) {
        return true

    }
    return (H.contains(E(I.left, I.top)) || H.contains(E(I.right, I.top)) || H.contains(E(I.right, I.bottom)) || H.contains(E(I.left, I.bottom)))
}

window.onscroll=function(){
    var flag=isElementVisible(firstImage,false)
   
    if(flag){
//alert('show')
    }else{
       // alert('hide');
    }
}
var idMain= document.querySelectorAll('img');

var firstImage = idMain[2];

setInterval(function(){
    //console.log("hi",isElementVisible(firstImage,false));
    // console.log("element",document.elementFromPoint(300, 100));
},5000)




// 
var array5=[4,5,3,1,2,8,9,12,1,6]
function findPairValues(arr,elem){
      var diff={},
          len = arr.length;
          result ={}
          
       for(var i=0;i<len;i++){
           if(arr[i] == elem){
                result[1]=[arr[i]];
           }
           var subtract = elem -arr[i];
       }    

  console.log("data :",result);
 }
//findPairValues(array5,8);

function permutations(str){
var arr = str.split(''),
    len = arr.length, 
    perms = [],
    rest,
    picked,
    restPerms,
    next;

    if (len == 0)
        return [str];

    for (var i=0; i<len; i++)
    {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

       // restPerms = permutations(rest.join(''));

       for (var j=0, jLen = restPerms.length; j< jLen; j++)
       {
           next = picked.concat(restPerms[j]);
           perms.push(next.join(''));
       }
    }
   return perms;
}

//console.log('permutations :', permutations('permutations'));

// infinteLoop loop without nonblocking UI
//infinteLoop(0);
var j=1000000;

function infinteLoop(i){
    if(i<j){
       setTimeout(function() {
           infinteLoop(++i);
           console.log(i);
       }, 1);                     
    }
}


window.ui = window.ui || {};

  /**  @constructor */
  ui.ListView = function(element, collection) {
    this.el = element;
    this.cellHeight = 30;
    this.collection = collection;

    // Find the first element with class 'Template' and use as a row template
    var tt = this.el.getElementsByClassName('Template');
    if (tt.length > 0) {
      var t = tt[0];
      this.template = t;
      t.parentNode.removeChild(t);
    }

    this.content = document.createElement('div');
    this.el.style.overflow = 'auto';
    this.el.appendChild(this.content);
    this.cells = [];
    this.listeners = [];

    // Juggle rows on scroll
    this.el.addEventListener('scroll', this.redraw.bind(this));

    // Ensure we have enough rows.
    window.addEventListener('resize', this.redraw.bind(this));

    // Get us started
    this.redraw();
  };

  /** Ensure we have enough physical lines to fill the screen */
  ui.ListView.prototype.ensure = function(desired) {
      while (this.cells.length < desired) {
        var cell = new ui.Template(this, this.template);
        cell.element.style.position = 'absolute';
        cell.element.style.y = 0;
        cell.element.style.x = 0;
        cell.element.style.height = this.cellHeight + 'px';
        cell.element.style.width = '100%';
        this.content.appendChild(cell.element);
        this.cells.push(cell);
      }
    };

  /** Re-render the rows */
  ui.ListView.prototype.redraw = function() {
    var cellh = this.cellHeight;
    var oheight = this.el.offsetHeight;
    var top = this.el.scrollTop;
    var topRow = ~~(top / cellh);
    var len = this.collection.length;

    this.content.style.height = (len * cellh) + 'px';

    var slosh = 10;

    var desiredRows = ~~(oheight / cellh + slosh);
    this.ensure(desiredRows);

    var start = Math.max(topRow - slosh / 2, 0);
    var end = Math.min(len, start + desiredRows);
    start = Math.max(0, end - desiredRows);

    var rows = [];
    for (var i = start; i < start + this.cells.length; i++) {
      rows.push(i);
      var cell = this.cells[i % this.cells.length];
      if (i < len) {
        var item = this.collection[i];
        cell.setItem(item);
        cell.setTop(cellh * i);
        cell.element.style.display = 'block';
      } else {
        cell.element.style.display = 'none';
      }
    }
  };


  /** @constructor */
  ui.Template = function(listView, node) {
    this.listView = listView;
    this.db = listView.collection;

    var tasks = [];
    this.tasks = tasks;

    this.element = node.cloneNode(true);

    // This recursive function sets up our "tasks" which fill in data from 
    function proc(node) {
      var cc = node.childNodes;
      for (var i = 0; i < cc.length; i++) {
        var child = cc[i];
        // TODO - Handle attributes and more complex text substitution.
        // e.g. sequence of "text",key extracted from '{{title}} by {{author}}' or 'http://{{key}}_{{blah}}.jpg'
        if (child.nodeType == 3) {
          var m = child.textContent.match('{{(.*)}}');
          if (m) {
            var key = m[1];
            tasks.push(function(doc) {
              child.textContent = doc[key] || '';
            });
          }
        } else {
          proc(child);
        }
      }
    }
    proc(this.element);
  };

  ui.Template.prototype.setTop = function(top) {
      this.element.style.top = top + 'px';
  };

  ui.Template.prototype.setItem = function(item) {
    if (item != this.item) {
      this.item = item;
      this.tasks.forEach(function(func) { func(item); });
    }
  };

// fill some dummy data to table and initialize the table
function initialize() {
        var data = [];
        for (var i=0;i<10000;i++) {
          data[i] = {'title': 'Title '+i, 'description': 'Description '+i};
        }
        var table = document.getElementById('table');
        // comment this out if you don't want iPad scrolling.
        //new ui.ScrollController(table);
        var listView = new ui.ListView(table, data);
      }







var count=0;
var df = document.getElementById('table');
df.onscroll= function(){
    console.log(++count);
}






// below is bad recursive approache as it grows exponentially
// because wea'r calling Fibonacci two time in side function 
// That leads to make it complexity of 2^n 
function Fibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
      return 1;
    }
    return Fibonacci(n-1) + Fibonacci(n-2) ;
}
//console.log("fibonicci(5);",Fibonacci(250));
// Gud eample of recursion
function factorial(n){
   if(n ==0){
       return 1;
   }
   return n * factorial(n-1);
}
console.log(factorial(6));



function test(){
    console.log("arguments :",arguments);
    var srr = Array.prototype.slice.call(arguments,0);
}



// getter and setter in javascript

var dummyObj ={
    firstName : "vivek",
    lastName : "kumar",
    
}

// function to make a div strachable
var isResizing=false,
    lastDownX=0;
var strachable ={
    element : {
        container : document.querySelector('.strechContainer'),
        ltPanel :document.querySelector('.left_panel'),
        rtPanel :document.querySelector('.right_panel'),
        dragPoint :document.querySelectorAll('.dragPoint')[0]
    },
    getElemenPosition : function (e){
        isResizing =true;
        lastDownX =e.clientX;
        //console.log("e.clientX",e.clientX);
    },
    resizeElement : function (e){
                if(!isResizing){
                        return true;
                }else{
                    console.log(this);
                    var ltPanelWidth=this.element.ltPanel.offsetWidth;
                    var rtPanelWidth=this.element.rtPanel.offsetWidth;
                    var dragPoint =this.element.dragPoint;
                    console.log('ltPanelWidth ',ltPanelWidth);
                    console.log('rtPanelWidth ',rtPanelWidth);
                    console.log(e.clientX);
                    var dragPoinPos =dragPoint.offsetLeft;
                    console.log("dragPoinPos",dragPoinPos);
                    this.element.ltPanel.style.width = e.clientX + 'px';
                    this.element.dragPoint.style.left = e.clientX + "px";
                    //dragPoint.style.left =
                }
    }


}

strachable.element.dragPoint.addEventListener('mousedown',strachable.getElemenPosition);
document.addEventListener('mousemove',strachable.resizeElement.bind(strachable));
strachable.element.dragPoint.addEventListener('mousedown',function (e){
    isResizing =true;
});
document.addEventListener('mouseup',function (e){
    isResizing =false;
});



var data1= ["Sun,Tue,Wed"]
function temp3(data1){
     var dayList=[{day:'Sunday',val:'Sun',checked:false},{day:'Monday',val:'Mon',checked:false},{day:'Tuesday',val:'Tue',checked:false},
                        {day:'Wednesday',val:'Wed',checked:false},{day:'Thursday',val:'Thu',checked:false},{day:'Friday',val:'Fri',checked:false},{day:'Saturday',val:'Sat',checked:false}];
                var dayArr = data1[0].split(',');
                console.log("dayArr :",dayArr);

               dayList.forEach(function (value,index,obj){
                    console.log("value",value,index,obj);

                    if(dayArr.indexOf(value.val) !== -1){
                            value.checked = true;
                    }else{
                            value.checked = false;
                    }
                });

                console.log("ttt",dayList);
        }

 temp3(data1);       


 // json to string conversions
// always put json in single quote string
// '{ }' like this  '{"name":8}'
// not like this  "{'name':8}"
 var data =[{
  "id": 1,
  "first_name": "Lois",
  "last_name": "Jones",
  "email": "ljones0@theguardian.com",
  "gender": "Female",
  "ip_address": "155.44.228.252"
}, {
  "id": 2,
  "first_name": "Frances",
  "last_name": "Burke",
  "email": "fburke1@twitter.com",
  "gender": "Female",
  "ip_address": '{"name":8}'
}, {
  "id": 3,
  "first_name": "Jose",
  "last_name": "Alvarez",
  "email": "jalvarez2@patch.com",
  "gender": "Male",
  "ip_address": "37.141.207.158"
}];
 var tempdata =data[1].ip_address;
 var jsonDatestr =JSON.parse(tempdata);
 console.log("json data",jsonDatestr.name);
 var dataString =JSON.stringify(data);
 console.log('json',dataString);
 console.log((data));

 var DomCompiler = DomCompiler || function (){
     'use strict'
     return {
         bootstrap : function (){
             dfd
         }
     }
 }

/*
 var session = {
     'screens' : [],
     'state' : true
 }
session.screens.push({ 'name': 'screenA', 'width': 450, 'height': 250 });
session.screens.push({ 'name': 'screenB', 'width': 650, 'height': 350 });
session.screens.push({ 'name': 'screenC', 'width': 750, 'height': 120 });
console.log("session : ",session);
localStorage.setItem('session',JSON.stringify(session));
*/
var getstoredObj = localStorage.getItem("session");
console.log("getstoredObj :",JSON.parse(getstoredObj).screens);

//session.screens.push({ 'name': 'screend', 'width': 750, 'height': 120 });
//console.log("session updated: ",session);




var vitualization = {
    table  : function (){
    }
}

var temp3={};
var bValue = 38;
Object.defineProperty(temp3 ,'name', {
    get: function() { return bValue; },
    set : function (newValue){
            bValue = newValue;
    },
    enumerable: true,
    configurable: true
});
temp3.name =85;
console.log("define1 prop : ",temp3.name);


var CustomEvents ={
    bind : function (element,eventName,handler,aync){
        var temp = aync !== undefined? async : true;
            if(element.addEventListener){
                return
            }
    }
}


// ASYNCHRONOUS recursion
/*(function ttttt(){
  dostuff()
  setTimeout(ttttt,100)
})();
*/




function arguments(){
    console.log("arguments list ",arguments);
    var tt1=Array.prototype.slice.call(arguments);
    console.log("arguments prop",typeof(arguments));
}
arguments(1,2,4,5,6);



// recursive merge two object
var obj1={
    id:124,
    fname:'markit',
    name:'Markit',
    adddress :{
        city:'ggn',
        newCity:'London'
    }
}
var obj2 ={
    id:45,
    fname:'IHS',
    name:'IHS-Markit',
    adddress :{
        city:'USA',
        newCity:'London'
    }
}
function MergeRecursive(obj1,obj2){
    for(var i in obj2){
        if(obj2.hasOwnProperty(i)){
            if(obj2[i].constructor === Object){
                    MergeRecursive(obj1[i],obj2[i]);
            }else{
                 obj1[i] = obj2[i]
            }
        }
    }
    console.log("obj1 :",obj1);
}
MergeRecursive(obj1,obj2);




function makeAjaxRequest(options){
        var http='';
        if(window.XMLHttpRequest){
                http = new XMLHttpRequest();
        }else{

        }
        http.onreadystatechange = function (){
            if(http.readyState == 4 && http.status == 200){
                console.log('data78 from',http.responseText);
                document.getElementById("demo").innerHTML = http.responseText;
            }
        }
        http.open(options.type,options.url,true);
        http.send();
}

var path ={
    url:'/api/users',
    type:'GET'
}
//makeAjaxRequest(path)

// pollyfill for Object.create


if(typeof Object.create !== 'function'){
    Object.create = function (o,props){
      function F(){}
      F.prototype=o;
      return new F();
    }

    var tt = new Foo();

var tt = new Object();
//tt.[[prototype]] = Foo.prototype
Foo.call(tt);
}



//getName().upperCase().append();

var tt = function main(){

    return{
        getName :  function (){
            console.log("viv90");
            return this;
        },
        upperCase : function (){
            console.log();
        },
        append : function (){
            console.log(this);
        }
    }
}

//console.log("tt object23",tt().getName().upperCase());




var tt2 = function main(name){
        this.name1=name;
        this.getName =function (){
            this.name1 =name + "kumar"
            console.log(this.name1);
            return this;
        },
        this.upperCase = function (){
            console.log(this.name1.toUpperCase());
            return this;
        },
        this.append = function (){
            this.name1 = "hii" +name;
            console.log(this.name1);
            return this
        }
        return this;
}
console.log("tt object23",new tt2("kapil").getName().upperCase().append());



















