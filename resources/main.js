/**
 * Created by vivek.kumar1 on 6/1/16.
 */
console.log(1);

var arr =[-3, -2, 0, 3, 4, 5,51,-9,9]

function distinctCount(arr){
    var count =0;
    var store ={};
    for(var i=0;i<arr.length;i++){
        console.log(store[arr[i]]);
        if(arr[i] == store[arr[i]]){

        }else{
            store[Math.abs(arr[i])]=Math.abs(arr[i]);
        }
    }
     count = console.log(Object.keys(store).length);
    return count;
    ;
}

console.log(distinctCount(arr));

// find lost element from the array

var arr1 =[4,5,6,9,10,11,12];
var arr2 =[4,5,9,10,11,12];

function binarySearch(arr,left,right,elem){

    var mid= Math.floor(left+right/2);
      if(arr[mid] == elem){
          console.log("element found");
          return elem;
      }
     else if(elem >arr[mid]){
          binarySearch(arr1,mid,arr1.length,11);
      }else if(elem < arr[mid]){
          binarySearch(arr1,0,mid-1,11);
      }
}

binarySearch(arr1,0,arr1.length,1);

var mod=angular.module('App',[]);
mod.controller('mainController',['$scope', function ($scope){
      $scope.name="Main Application";
}]);


var dataSet =[
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
var tt= dataSet[0].Domain;
//console.log('json',JSON.parse(tt).viv);
function filterData (data){
    console.log(data);
    var temp={};
    for(var i=0;i<data.length;i++){
        if(temp[data[i].Grade] == undefined){
            console.log(1);
        }
        if(data[i].Grade == temp[data[i].Grade]){
            data.splice(i,1);
            console.log(2);
       }
       else{
            console.log(3);
            temp[data[i].Grade] =data[i].Grade;
        }

    }
    //console.log(data);
}

//filterData(dataSet);

var standardsList = [
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Geometry"},
    {"Grade": "Math 1", "Domain": "Counting & Cardinality"},
    {"Grade": "Math 1", "Domain": "Orders of Operation"},
    {"Grade": "Math 2", "Domain": "Geometry"}
];

function filterdata(data,key){
    var temp={};
    for(var i=0;i<data.length;i++){
       // var tt= JSON.parse(key);

        // use . notation  for fixed value and use [] notation for variable key value

       // console.log(data[i][key]); // will show the result based on the value of key variable
        //console.log(data[i].key); // will throw error
       // console.log(data[i].Grade); // will give the value based on the value of key Grade


        if(temp[data[i][key]] === data[i][key]){
            data.splice(i,1);
        }
        if(undefined !== data[i]){
          temp[data[i][key]]=data[i][key];
        }
    }
    //console.log(temp,data)
}
var key="Domain";
filterdata(standardsList,key);















var gradedata = [
    {"Grade": 2, "Domain": "Counting & Cardinality"},
    {"Grade": 3, "Domain": "Geometry"},
    {"Grade":1, "Domain": "Counting & Cardinality"},
    {"Grade": 4, "Domain": "Orders of Operation"},
    {"Grade": 7, "Domain": "Geometry"},
    {"Grade": 17, "Domain": "Geometry"},
    {"Grade": 70, "Domain": "Geometry"}
];

//console.log(gradedata.filter(getResult));

function getResult(value,index,item){
    console.log(value,index,item[index].Grade);
    if(item[index].Grade >4){
        return true;
    }else {
        return false;
    }
}

function mapResult(value,index,item){
    if(item[index].Grade >4){
        return true;
    }else {
        return false;
    }
}
//console.log(gradedata.map(mapResult));

// custom method for mapping method
Array.prototype.mapping = function (fn){
    var th = this;
    var newArray = new Array(th.length);

      for(var i=0;i<th.length;i++){
            var data =fn.call(th,th[i]);
          newArray.push(data);
      }
    return newArray;

}
function Square(value){
     return Math.sqrt(value);
}

console.log([4,9,81].mapping(Square));




function fibonacci (n){
    //console.log(n);
   if(n <= 1){
       return n;
   }else{
       return fibonacci(n-1)+fibonacci(n-2)
   }
}
console.log(fibonacci(5));


var data = {firstname:'Jesper',data1:"{'surname':'Aaberg','phone':'fdf'}"};
/*var tt =JSON.parse(data.data1);
console.log(tt);*/






var userController = {
     currentUser :'',
     findUser : function (){
          return this.currentUser;
     },
    setUser : function (user){
        this.currentUser =user;
    },
    getuser : function (){
        return userController.findUser();
    }

}

userController.setUser("vivek6");

//console.log(userController.getuser());


var modulePattern = (function (){

    var count=0;
    var name1 ="vivek"

    var getName = function (){
        console.log("name",name1);
        return name1;
    }

    var setName = function (name){
        this.name =name;
    }

    return {

        get :getName,
        set : setName
    }
});
var md1 =modulePattern();
md1.set('kapil');
//console.log(md.get());

var modulePattern2 = (function (md){
    var name =md();
    var count2 =2;
    console.log(name.get());

    md.getCount = function (){
        console.log(name.get() + count2);
    }
    var getIt =  function (){
        return {
            md:name
        }
    }


    return {
        tm:getIt
    }
})(modulePattern);

var md2 = modulePattern2;
//console.log(modulePattern2);







// closures in java script
var temp =9
var add = function (a,b){
     temp=a+b;
      return function addAll(c){
         return temp +c
     }
}
var m1 = add(3,5);
console.log(m1(3));

function callIt(a,b){
    console.log("inside call function",a,b);
}

setTimeout(callIt,5000,'viv','4');

setTimeout(callIt.bind(this,'viv',4),3000);

// below function will be executed as soon as the js is parsed
setTimeout(callIt.call(this,'viv',4),3000);

setTimeout(function(){callIt(45,23)},3000);


myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"

setTimeout(myArray.myMethod.bind(myArray,1),400);



// you can directly add ethod or prop to array,object,and function but not on primitive type like int
var str=function (){};
str.strMethod = function (){console.log('str method')};
console.log(str.strMethod());



removeDuplicate([1,3,3,3,1,5,6,7,8,1]);
function removeDuplicate(arr){

 }