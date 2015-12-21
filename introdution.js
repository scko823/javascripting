// // // // // // // function createBase(base){
// // // // // // //
// // // // // // //
// // // // // // //   return function(num){
// // // // // // //     return base+num
// // // // // // //   }
// // // // // // // };
// // // // // // //
// // // // // // // var addSix = createBase(6);
// // // // // // // console.log(addSix(10));
// // // // // // // console.log(addSix(21));
// // // // // // // function count(){
// // // // // // //   var _counter=0;
// // // // // // //   return {
// // // // // // //     add: function(number){_counter+=number},
// // // // // // //     get:function(){return _counter}
// // // // // // //   };
// // // // // // // };
// // // // // //
// // // // // // // function Counter(){
// // // // // // //   this.count=0;
// // // // // // //   this.add = function(inc){
// // // // // // //     this.count+=inc;
// // // // // // //   };
// // // // // // //   this.get = function(){
// // // // // // //     return this.count
// // // // // // //   };
// // // // // // // };
// // // // // // //
// // // // // // // c = new Counter();
// // // // // // // c.add(18);
// // // // // // // c.add(-10);
// // // // // // // console.log(c.get());
// // // // // //
// // // // // //
// // // // // // var arr1= [3,4,132,34,13];
// // // // // // var obj1 = {};
// // // // // // function mulitply2(num){
// // // // // //   return 2*num;
// // // // // // };
// // // // // //
// // // // // // for (var i = 0; i<arr1.length;i++){
// // // // // //   obj1[arr1[i].toString()] = mulitply2(arr1[i]);
// // // // // // };
// // // // // // for (key in obj1){
// // // // // //   console.log(key+':'+obj1[key])
// // // // // // };
// // // // //
// // // // // function staircase(n){
// // // // //   if (n==1){
// // // // //     return 1
// // // // //   }else if (n==2){
// // // // //     return 2
// // // // //   }else{
// // // // //     return staircase(n-1)+staircase(n-2)
// // // // //   }
// // // // // };
// // // // // for (var i = 1; i<10; i++){
// // // // //   console.log(i +":"+ staircase(i));
// // // // // };
// // // // var x = [1,2,5,34,35,13,56,870];
// // // // var y = x.every(function(x){return x%5===0});
// // // // console.log(y);
// // // function multiply(n){
// // //   return function (m) {
// // //     return n*m
// // //   }
// // // }
// // // console.log(multiply(5)(6));
// // var arr = [1,2,3,4,5,8];
// // Array.prototype.avg = function () {
// //   var sum=this.reduce(function(x,y){return x+y},0);
// //
// //   return (sum/this.length).toFixed(3)
// // };
// // console.log(arr.avg());
//
// function isSeven(num){
//   var sum=0;
//   while (num>0){
//     sum+=num%10;
//     num=Math.floor(num/10)
//   };
//   if (sum===7){
//     return true
//   };
//   return false;
// }
// function arrCheck(arr,callback){
//   return arr.some(callback)
// };
// var arr = [52,23,44]
// console.log(arr.some(isSeven))
// console.log(arrCheck(arr,isSeven));

function NumberAddition(str) {

  // code goes here
  var sum=0;
  var number = str.match(/[0-9]+/g);
  for (var i =0; i<number.length;i++){
    sum+= parseInt(number[i])
  }
  return sum;


}

console.log(NumberAddition( "75Number9"));
